import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/InderjeetSingh4" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/inderjeetsingh4" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/iinderjeett/" target="_blank">
            <FaInstagram />
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
