import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import HoverLinks from "./HoverLinks";

import { gsap } from "gsap";

const SocialIcons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    const spans = social.querySelectorAll("span");
    const cleanupFns: Array<() => void> = [];

    spans.forEach((item) => {
      const elem = item as HTMLElement;

      const onMouseMove = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const dist = Math.hypot(distanceX, distanceY);

        if (dist < 80) {
          gsap.to(elem, {
            x: distanceX * 0.35,
            y: distanceY * 0.35,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(elem, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
          });
        }
      };

      window.addEventListener("mousemove", onMouseMove);
      cleanupFns.push(() => window.removeEventListener("mousemove", onMouseMove));
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://github.com/InderjeetSingh4"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/inderjeetsingh4"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </span>
      </div>
      <div className="resume-button" onClick={() => setIsModalOpen(true)}>
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </div>

      {isModalOpen && createPortal(
        <div className="resume-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Select Resume</h3>
            <div className="resume-options">
              <a href="https://drive.google.com/file/d/1HkhvSEqLpqNXHKITX07vALFLdLh7R1fX/view?usp=drive_link" target="_blank" rel="noreferrer" className="resume-link">
                Data Analyst Resume
              </a>
              <a href="https://drive.google.com/file/d/1xmbrrGGZU2fmWFuBTL1OLpv_5A26NKbI/view?usp=drive_link" target="_blank" rel="noreferrer" className="resume-link">
                Web Developer Resume
              </a>
            </div>
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default SocialIcons;
