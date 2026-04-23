import {
  Hero,
  TechStack,
  About,
  Experience,
  Education,
  Services,
  Skills,
  Projects,
  Testimonials,
  Contact,
} from "../sections";

const Home = () => {
  return (
    <main>
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Services />
      <Testimonials />
      <Education />
      <Contact />
    </main>
  );
};

export default Home;
