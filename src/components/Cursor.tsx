import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hover = false;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const mousePos = { x: -100, y: -100 };
    const cursorPos = { x: -100, y: -100 };

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;

    const loop = () => {
      if (!hover) {
        const ease = 0.25;
        cursorPos.x += (mousePos.x - cursorPos.x) * ease;
        cursorPos.y += (mousePos.y - cursorPos.y) * ease;
        xSet(cursorPos.x);
        ySet(cursorPos.y);
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    const handleMouseOver = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      if (target.dataset.cursor === "icons") {
        cursor.classList.add("cursor-icons");
      }
      if (target.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };

    const handleMouseOut = () => {
      cursor.classList.remove("cursor-disable", "cursor-icons");
      hover = false;
    };

    const elements = document.querySelectorAll("[data-cursor]");
    elements.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      elements.forEach((item) => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef} />;
};

export default Cursor;
