import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { AITools } from "@/components/portfolio/AITools";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muskan Saini — Backend Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Backend engineer with 2+ years of experience building scalable APIs, microservices, and real-time systems. Node.js, NestJS, MySQL, Redis.",
      },
      { property: "og:title", content: "Muskan Saini — Backend Engineer" },
      {
        property: "og:description",
        content:
          "Building scalable, high-performance backend systems. Node.js · NestJS · MySQL · Redis · RabbitMQ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AITools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
