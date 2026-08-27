import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/landing/Hero";
import WhoItsFor from "../components/landing/WhoItsFor";
import Features from "../components/landing/Features";
import Pricing from "../components/landing/Pricing";
import HowItWorks from "../components/landing/HowItWorks";
import Faq from "../components/landing/Faq";
import CtaBand from "../components/landing/CtaBand";
import GetStartedModal from "../components/landing/GetStartedModal";
import "./HomePage.css";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onGetStarted={openModal} />
      <Hero onGetStarted={openModal} />
      <WhoItsFor />
      <Features />
      <Pricing onGetStarted={openModal} />
      <HowItWorks />
      <Faq />
      <CtaBand onGetStarted={openModal} />
      <Footer />
      <GetStartedModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}