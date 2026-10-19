import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import CaseStudies from "./components/CaseStudies";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hi%20Leads%20In%20click%2C%20I%20want%20a%20free%20growth%20audit%20for%20my%20business."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Leads In click on WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.2, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-0 rounded-full bg-[#25d366] p-3.5 text-white shadow-[0_12px_36px_rgba(37,211,102,0.45)] sm:right-7 sm:bottom-7"
    >
      <span
        className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25d366]"
        aria-hidden="true"
      />
      <MessageCircle className="relative h-6 w-6" strokeWidth={2.2} />
      <span className="relative max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-500 group-hover:ml-2 group-hover:max-w-[130px]">
        Chat with us
      </span>
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="noise relative min-h-screen w-full overflow-x-hidden bg-void font-body text-zinc-100 antialiased">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[80] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Showcase />
        <CaseStudies />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}