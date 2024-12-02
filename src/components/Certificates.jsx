import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { CERTIFICATES } from "../constants";

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const scrollRef = useRef(null);

  const handleClose = () => {
    setSelectedCertificate(null);
    // Remove history state when closing
    window.history.back();
  };

  useEffect(() => {
    const handlePopState = () => {
      if (selectedCertificate) {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedCertificate]);

  const handleCertificateClick = (cert) => {
    setSelectedCertificate(cert);
    // Add a new history entry when opening the modal
    window.history.pushState(null, "", window.location.href);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="pb-16 border-b border-neutral-900">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Main Certifications
      </motion.h2>

      {/* Auto-Scrolling Certificates with Buttons */}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
        style={{ top: "50%", transform: "translateY(-50%) rotate(180deg)" }}
          onClick={() => scroll("left")}
          className="absolute -left-5 rounded-full text-white bg-black opacity-90 z-10"
        >
          <DotLottieReact
            src="https://lottie.host/5c18a73b-857e-434f-b7fd-9c7a38b0b40e/OUWIGKEiuO.lottie"
            loop
            autoplay
            className="w-14 h-14"
             // Rotate for left direction
          />
        </button>

        {/* Certificates Container */}
        <div
          ref={scrollRef}
          className="flex justify-start space-x-4 overflow-x-auto p-4 scrollbar-hide"
        >
          {CERTIFICATES.map((cert) => (
            <motion.img
              key={cert.id}
              src={cert.image}
              alt={cert.title}
              className="w-60 h-36 object-cover rounded-lg cursor-pointer hover:scale-105 border border-gray-700"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleCertificateClick(cert)}
            />
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
        
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/2 transform -translate-y-1/2 rounded-full text-white bg-black opacity-90"
        >
          <DotLottieReact
            src="https://lottie.host/5c18a73b-857e-434f-b7fd-9c7a38b0b40e/OUWIGKEiuO.lottie"
            loop
            autoplay
            className="w-14 h-14"
          />
        </button>
      </div>

      <div className="w-full text-center text-sm text-gray-500 lg:hidden">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: -15 }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll Left for More Certificates
        </motion.p>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="rounded-lg bg-black bg-opacity-70 pr-4 max-w-4xl w-11/12 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Large Certificate Preview */}
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full md:w-2/3 max-h-[70vh] object-contain rounded-md border border-gray-700"
            />

            {/* Details Section */}
            <div className="flex flex-col space-y-3 text-left">
              <h3 className="text-2xl font-bold">{selectedCertificate.title}</h3>
              <p className="text-gray-400">{selectedCertificate.details}</p>
              <p className="text-gray-500">Issued: {selectedCertificate.date}</p>
              {selectedCertificate.verificationLink && ( <a
                href={selectedCertificate.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black px-4 py-2 rounded-md hover:bg-neutral-800 transition text-center"
              >
                Verify Certificate
              </a> )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CertificatesSection;
