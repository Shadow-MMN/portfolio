import Contact from "@/components/main/Contact";
import Encryption from "@/components/main/Encryption";
import Experience from "@/components/main/Experience";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Testimonial from "@/components/main/Testimonials";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 sm:gap-14 md:gap-16 lg:gap-20">
        <Hero />
        <Skills />
        <Experience />
        <Testimonial />
        {/* <Encryption /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
