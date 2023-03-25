import DaoSection from "@/views/about/DaoSection";
import HeroSection from "@/views/about/HeroSection";
import TeamSection from "@/views/about/TeamSection";
import TrainingSection from "@/views/about/TrainingSection";
import WorkSection from "@/views/about/WorkSection";
import React from "react";

const About = () => {
  return (
    <>
      <HeroSection />
      <DaoSection />
      <WorkSection />
      <TrainingSection />
      <TeamSection />
    </>
  );
};

export default About;
