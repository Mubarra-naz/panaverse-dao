import DaoSection from "@/views/home/DaoSection";
import HeroSection from "@/views/home/HeroSection";
import PartnersSection from "@/views/home/PartnersSection";
import ReviewSection from "@/views/home/ReviewSection";
import Stats from "@/views/home/Stats";
import Web3Section from "@/views/home/Web3Section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Web3Section />
      <DaoSection />
      <ReviewSection />
      <PartnersSection />
    </>
  );
}
