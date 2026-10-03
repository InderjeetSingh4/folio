import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

import TechStack from "./TechStack";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    // Scroll Reveal Observer (excluding pinned .work-section to preserve natural GSAP scroll physics)
    const sectionTargets = document.querySelectorAll(
      ".about-section, .whatIDO, .techstack-container, .career-section, .contact-section"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionTargets.forEach((section) => {
      section.classList.add("scroll-reveal");
      observer.observe(section);
    });

    // Parallax background handler
    const circle1 = document.querySelector(".landing-circle1") as HTMLElement;
    const circle2 = document.querySelector(".landing-circle2") as HTMLElement;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (circle1) {
        circle1.style.transform = `translate3d(0, ${scrollY * 0.15}px, 0)`;
      }
      if (circle2) {
        circle2.style.transform = `translate3d(0, ${scrollY * -0.1}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Work />
            <TechStack />
            <Career />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
