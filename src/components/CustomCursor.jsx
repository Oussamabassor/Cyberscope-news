"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  
  // Smooth cursor movement
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring animation for the outer circle
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    // Handle interactive elements
    const handleLinkHoverEvents = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input[type="submit"], input[type="image"], label[for]:not([for=""]), select, [onclick], [tabindex]:not([tabindex="-1"])'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    };

    // Add event listeners
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    
    handleLinkHoverEvents();

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99999]"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 -mt-2 -ml-2 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div
          className={`absolute inset-0 rounded-full bg-white transition-transform duration-150 ease-out
            ${clicked ? 'scale-75' : 'scale-100'}
            ${linkHovered ? 'scale-150' : 'scale-100'}`}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/30 blur-sm" />
        </div>
      </motion.div>

      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 -mt-6 -ml-6"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div
          className={`absolute inset-0 rounded-full border border-white/30 transition-all duration-200 ease-out
            ${clicked ? 'scale-75 border-white/50' : 'scale-100'}
            ${linkHovered ? 'scale-150 border-white/70' : 'scale-100'}`}
        >
          {/* Outer glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/5 blur-md" />
          
          {/* Electronic scan effect */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div
              className={`absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent animate-scan
                ${clicked ? 'opacity-100' : 'opacity-50'}`}
            />
          </div>
        </div>
      </motion.div>

      {/* Interactive element highlight */}
      {linkHovered && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 -mt-8 -ml-8"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        >
          <div className="absolute inset-0 border rounded-full border-white/10 animate-pulse">
            <div className="absolute inset-0 rounded-full bg-white/5 blur-lg" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CustomCursor;
