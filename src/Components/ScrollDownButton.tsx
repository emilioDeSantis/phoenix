"use client";
import React from 'react';
import AnimatedComponent from './AnimatedComponent';

const ScrollDownButton = () => {
  return (
    <div
      className="scroll-spacer"
      style={{
        position: "absolute",
        width: "100vw",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingInline: "5vw",
        zIndex: 5,
        opacity: 0.8,
      }}
    >
      <button
        onClick={() => {
          window.scrollBy({
            top: window.innerHeight, // Scroll down one full screen height
            left: 0,
            behavior: "smooth", // Smooth scroll
          });
        }}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <AnimatedComponent
          yOffset={60}
          duration={0.4}
          delay={0.8}
          triggerMargin="0%"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              border: "0.5px solid white",
              borderRadius: "100%",
              width: "2.4rem",
              height: "2.4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "1.4rem",
                width: "1.4rem",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ alignSelf: "center" }}
              >
                <path d="M12 1 L12 23 M1 12 L12 23 L23 12"></path>
              </svg>
            </div>
          </div>
          <div
            style={{
              fontWeight: 300,
              fontSize: "0.8rem",
            }}
          >
            SCROLL
          </div>
        </AnimatedComponent>
      </button>
    </div>
  );
};

export default ScrollDownButton;
