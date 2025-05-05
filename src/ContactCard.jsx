import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactCard = () => {
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(
      textRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.5"
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        ref={cardRef}
        className="bg-white border border-gray-300 rounded-2xl shadow-2xl p-8 flex flex-col sm:flex-row items-center gap-8 max-w-3xl w-full transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
      >
        {/* Logo */}
        <img
          src="/logo.png" // Make sure this path is correct
          alt="ChitraKraft Logo"
          className="w-48 h-auto object-contain"
        />

        {/* Contact Info */}
        <div
          ref={textRef}
          className="text-black text-center sm:text-left space-y-3"
        >
          <p>
            <span className="font-semibold">Email:</span>{" "}
            officialchitrakraft@gmail.com
          </p>
          <p>
            <span className="font-semibold">Instagram:</span> @instahndel
          </p>
          <p>
            <span className="font-semibold">Contact Number:</span> 1234567890
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
