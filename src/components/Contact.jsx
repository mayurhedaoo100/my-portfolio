import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null); // State to manage form status (success/error)

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission (optional, if needed)

    // Simulate form submission (you can add real API call or other actions here)
    const formData = new FormData(event.target);
    try {
      // If you want to manually submit using a fetch request, you can do so here
      // Example using fetch (optional, Netlify already handles form submission):
      await fetch('/', {
        method: 'POST',
        body: formData,
      });

      // If the submission was successful, show the success message
      setFormStatus('success');
      
      // Reset form fields
      event.target.reset(); // This will clear the form inputs
    } catch (error) {
      // Handle error
      setFormStatus('error');
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <form
        name="contact"
        netlify
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6"
      >
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
          className="w-full font-thin mb-3 px-4 py-2 border bg-transparent border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700"
          aria-label="Your Name"
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number"
          className="w-full font-thin mb-3 px-4 py-2 border bg-transparent border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700"
          aria-label="Phone number"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="w-full font-thin mb-4 px-4 py-2 border bg-transparent border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700"
          aria-label="Email"
        />

        <button
          type="submit"
          className="w-full py-2 bg-black text-white font-thin rounded-md hover:bg-neutral-900 transition duration-200"
        >
          Send
        </button>
      </form>

      {formStatus === 'success' && (
        <p className="text-center text-green-600 mt-4">Form submitted successfully!</p>
      )}
      {formStatus === 'error' && (
        <p className="text-center text-red-500 mt-4">Oops, something went wrong. Please try again.</p>
      )}

      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <a href="mailto:mayurh100@gmail.com" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
