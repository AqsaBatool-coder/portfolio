import React from "react";
import HeroSection from "./hero-section/page";
import AboutSection from "./about-section/page";
import SkillsSection from "./skills-section/page";
import ProjectsSection from "./projects-section/page";
import ExperienceSection from "./experience-section/page";
import EducationSection from "./education-section/page";
import ContactSection from "./contact-section/page";

const Divider = () => (
  <div className="relative section-padding mx-auto max-w-7xl">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
  </div>
);

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <EducationSection />
      <Divider />
      <ContactSection />
    </React.Fragment>
  );
};

export default HomePage;
