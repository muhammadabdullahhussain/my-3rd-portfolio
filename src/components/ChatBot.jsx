import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User, ChevronDown, Sparkles, Wand2, ShieldCheck, Zap, Mail, CheckCircle2 } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import emailjs from "@emailjs/browser";
import {
  servicesList,
  projectsList,
  experienceList,
  skillCategories,
  educationList,
  bentoSocialLinks
} from "../constants";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("email"); // email -> chat
  const [clientEmail, setClientEmail] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am Abdullah's AI intelligence. To help you better and keep in touch, please enter your email address first. What is your email?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSendingTranscript, setIsSendingTranscript] = useState(false);
  const scrollRef = useRef(null);

  // Gemini Setup
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const systemPrompt = `
    You are the Elite AI Personal Assistant for Muhammad Abdullah Hussain, a Senior Full Stack & Mobile App Developer with 5+ years of experience.
    Creator: Muhammad Abdullah Hussain.
    Background: Expertise in MERN, Next.js, TS, Laravel, PHP, Shopify, and Apps (iOS/Android).
    Stats: 60+ Projects delivered.
    User Email: ${clientEmail}
    Goal: Persuade the client to hire Abdullah and start a WhatsApp project: ${bentoSocialLinks.find(l => l.name === 'WhatsApp')?.href}.
  `;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isTyping]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const sendTranscriptEmail = async (currentMessages, email) => {
    const emailToUse = email || clientEmail;
    if (!emailToUse) return;

    try {
      const transcript = currentMessages
        .map(m => `${m.sender.toUpperCase()} [${m.time}]: ${m.text}`)
        .join("\n\n---\n\n");

      const payload = {
        from_name: `AI Chat Bot (${emailToUse})`,
        to_name: "Muhammad Abdullah",
        message: `New Lead Conversation From ChatBot:\n\nClient Email: ${emailToUse}\n\nChat Transcript:\n\n${transcript}`,
        reply_to: emailToUse,
        subject: `[AI LEAD] Chat from ${emailToUse}`,
      };

      const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      await emailjs.send(serviceID, templateID, payload, publicKey);
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
    }
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // STEP 1: Handle Email Collection
    if (step === "email") {
      if (validateEmail(text)) {
        setClientEmail(text);
        setStep("chat");
        
        const welcomeBack = {
          id: messages.length + 2,
          text: `Thank you! I've noted your email. How can I assist you with your project? Abdullah is an expert in MERN stack, Laravel, Shopify, and Mobile Apps with 5+ years of experience!`,
          sender: "bot",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        const updatedMsgs = [
          ...messages,
          { id: messages.length + 1, text, sender: "user", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
          welcomeBack
        ];
        
        setMessages(updatedMsgs);
        setInputValue("");
        
        // Send initial lead email immediately
        sendTranscriptEmail(updatedMsgs, text);
        return;
      } else {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, text, sender: "user", time: new Date().toLocaleTimeString() },
          { id: prev.length + 2, text: "Please enter a valid email address so Abdullah can contact you back.", sender: "bot", time: new Date().toLocaleTimeString() }
        ]);
        setInputValue("");
        return;
      }
    }

    // STEP 2: Handle AI Chat
    if (!API_KEY || API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
      setMessages((prev) => [...prev, { id: prev.length + 1, text, sender: "user", time: new Date().toLocaleTimeString() }, { id: prev.length + 2, text: "Gemini AI Key missing. Check .env.", sender: "bot", time: new Date().toLocaleTimeString() }]);
      setInputValue("");
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: systemPrompt + "\n\nUser Question: " + text }] }],
      });
      const responseText = result.response.text();

      const botMsg = {
        id: messages.length + 2,
        text: responseText,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      const updatedChat = [...messages, newMessage, botMsg];
      setMessages(updatedChat);
      
      // Auto-send transcript after every user message to ensure you get it even if they close
      sendTranscriptEmail(updatedChat);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFinishChat = async () => {
    setIsSendingTranscript(true);
    await sendTranscriptEmail(messages);
    setIsSendingTranscript(false);
    setIsOpen(false);
  };

  const quickOptions = [
    { text: "Core Tech Stack", icon: <Zap size={12} /> },
    { text: "Mobile Expertise", icon: <Bot size={12} /> },
    { text: "Hire Abdullah", icon: <ShieldCheck size={12} /> },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none">
      {/* Bot Window */}
      <div
        className={`pointer-events-auto flex flex-col bg-[#0d091a]/95 backdrop-blur-2xl border border-white/10 rounded-[28px] overflow-hidden mb-6 shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) transform ${
          isOpen ? "scale-100 opacity-100 translate-y-0 w-[90vw] md:w-[420px] h-[600px]" : "scale-[0.85] opacity-0 translate-y-20 pointer-events-none w-[380px] h-0"
        }`}
      >
        {/* Header */}
        <div className="relative h-28 flex-shrink-0 flex items-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-pulse"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="relative flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500 to-pink-500 p-[1px] shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full rounded-2xl bg-[#0d091a] flex-center">
                    <Sparkles className="text-blue-400 w-7 h-7 animate-shimmer" />
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-[3px] border-[#0d091a] shadow-lg"></span>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-bold tracking-tight">Abdullah AI</h3>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400/90 text-[10px] font-bold uppercase tracking-[0.1em]">Intelligence Engaged</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                title="Finish & Send Transcript"
                onClick={handleFinishChat}
                className="w-10 h-10 rounded-xl bg-green-500/10 flex-center text-green-400 hover:bg-green-500/20 transition-all cursor-pointer border border-green-500/20"
              >
                <CheckCircle2 size={20} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl bg-white/5 flex-center text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer border border-white/5"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Messaging Area */}
        <div
          ref={scrollRef}
          className="flex-1 px-6 overflow-y-auto space-y-6 pt-6 pb-4 no-scrollbar border-t border-white/5 bg-white/[0.01]"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-message-in`}
            >
              <div
                className={`max-w-[85%] rounded-[20px] p-4 text-[13px] leading-[1.6] shadow-xl ${
                  msg.sender === "user"
                    ? "bg-gradient-to-tr from-blue-600 to-blue-400 text-white rounded-tr-[4px]"
                    : "bg-white/[0.03] border border-white/10 text-gray-200 rounded-tl-[4px]"
                }`}
              >
                {msg.text}
                <div className={`mt-2 text-[9px] font-medium opacity-40 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start animate-message-in">
              <div className="bg-white/[0.03] border border-white/10 p-4 rounded-[20px] rounded-tl-[4px]">
                <div className="flex gap-1.5 px-1 min-w-[40px]">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-duration:0.8s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.3s]"></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Bar */}
        <div className="px-6 py-5 space-y-4 bg-gradient-to-t from-[#0d091a] to-transparent flex-shrink-0">
          {!isTyping && messages.length < 10 && step === "chat" && (
            <div className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
              {quickOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(opt.text)}
                  className="flex items-center gap-2 whitespace-nowrap bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-medium text-white/80 py-2 px-4 rounded-full transition-all active:scale-95 cursor-pointer"
                >
                  {opt.icon}
                  {opt.text}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-1.5 pl-5 focus-within:border-blue-500/50 transition-all duration-300"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={step === "email" ? "Enter your email address..." : "Ask Abdullah AI something..."}
              className="flex-1 bg-transparent text-[13px] text-white outline-none placeholder:text-white/20"
            />
            <button
              type="submit"
              disabled={isTyping || !inputValue.trim() || isSendingTranscript}
              className={`w-10 h-10 rounded-[12px] bg-gradient-to-tr from-blue-500 to-pink-500 text-white flex-center shadow-lg shadow-blue-500/20 hover:scale-[1.05] active:scale-[0.95] transition-all cursor-pointer ${isTyping || !inputValue.trim() || isSendingTranscript ? 'opacity-30' : ''}`}
            >
              {isSendingTranscript ? <Sparkles size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </form>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto h-16 w-16 md:h-18 md:w-18 rounded-[24px] flex-center transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) shadow-[0_15px_40px_rgba(0,0,0,0.4)] relative overflow-hidden cursor-pointer ${
          isOpen ? "bg-white text-[#0d091a] rotate-180" : "bg-[#0d091a] text-white border border-white/10"
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${!isOpen ? 'opacity-20' : ''}`}></div>
        
        {isOpen ? (
          <ChevronDown size={32} className="relative z-10" />
        ) : (
          <div className="relative z-10 flex flex-col items-center">
            <MessageCircle size={30} />
            <div className="absolute -top-3 -right-3 h-[22px] w-[22px] bg-blue-500 rounded-full border-[4px] border-[#0d091a] flex-center">
              <Sparkles size={8} className="text-white animate-pulse" />
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
