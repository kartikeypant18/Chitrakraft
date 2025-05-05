import React, { useEffect, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";

function App() {
  const logoRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate main logo (camera icon)
    tl.fromTo(
      logoRef.current.querySelector("img:not(.name)"),
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animate name logo (e.g., "C")
    tl.fromTo(
      logoRef.current.querySelector("img.name"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    // Animate contact info
    tl.fromTo(
      infoRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="logo" ref={logoRef}>
          <img src="/logo.png" alt="Logo" />
          <img src="/name.png" alt="Name" className="name" />
        </div>
        <div className="info" ref={infoRef}>
          <p>
            <i className="fas fa-envelope"></i>{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=officialchitrakraft@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              officialchitrakraft@gmail.com
            </a>
          </p>

          <p>
            <i className="fas fa-phone"></i>{" "}
            <a href="tel:+918802423423">+91 8802423423</a>
          </p>

          <p>
            <i className="fab fa-instagram"></i>{" "}
            <a
              href="https://www.instagram.com/chitrakraft_media?igsh=OThvcjYwYzh6MGtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              chitrakraft_media
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
