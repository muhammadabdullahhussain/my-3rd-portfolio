import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as Z from "zod";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

const contactFormSchema = Z.object({
  name: Z.string().min(1, "Name is required"),
  email: Z.string().email("Invalid email address"),
  subject: Z.string().min(1, "Subject is required"),
  message: Z.string().min(10, "Message must be at least 10 characters"),
});

const initialValues = { name: "", email: "", subject: "", message: "" };

const Toast = ({ type, message, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className={`toast ${type === "success" ? "toast-success" : "toast-error"} flex items-center gap-3`}>
      <span>{type === "success" ? "✅" : "❌"}</span>
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100">✕</button>
    </div>
  );
};

const InputField = ({ label, error, children }) => (
  <div className="flex flex-col relative group">
    {children}
    <label className="absolute left-0 -top-5 text-white/40 font-bold text-[10px] tracking-[0.2em] uppercase transition-colors group-focus-within:text-blue-400">{label}</label>
    {error && <span className="absolute right-0 -bottom-6 text-red-400 text-[10px] font-medium tracking-wide flex items-center gap-1"><span className="text-red-500">⚠</span> {error.message}</span>}
  </div>
);

const inputClass = "w-full py-3 bg-transparent border-b border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-400 transition-all duration-300 text-base sm:text-lg font-medium";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        from_name: data.name,
        to_name: "Muhammad Abdullah",
        message: data.message,
        reply_to: data.email,
        subject: data.subject,
      };
      const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const userID = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
      await emailjs.send(serviceID, templateID, payload, { publicKey: userID });
      setToast({ type: "success", message: "Message sent! I'll reply within 24 hours." });
      reset(initialValues);
    } catch {
      setToast({ type: "error", message: "Failed to send message. Please try WhatsApp instead." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 sm:gap-14 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 w-full">
          <InputField label="Your Name" error={errors.name}>
            <input {...register("name")} type="text" placeholder="Muhammad Ali" className={inputClass} />
          </InputField>
          <InputField label="Email Address" error={errors.email}>
            <input {...register("email")} type="email" placeholder="hello@example.com" className={inputClass} />
          </InputField>
        </div>
        <InputField label="Subject" error={errors.subject}>
          <input {...register("subject")} type="text" placeholder="I have an exciting project..." className={inputClass} />
        </InputField>
        <InputField label="Message" error={errors.message}>
          <textarea {...register("message")} placeholder="Tell me about your goals, timelines, and ideas..." rows={4} className={`${inputClass} resize-none`} />
        </InputField>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center py-4 sm:py-5 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold disabled:opacity-60 disabled:cursor-not-allowed mt-4"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <span>Send Message 🚀</span>
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
