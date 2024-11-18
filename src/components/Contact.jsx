import { useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
    };

    const response = await fetch('https://formspree.io/f/xyzypewl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      setFormStatus('success');
      event.target.reset(); // Reset form after successful submission
    } else {
      setFormStatus('error');
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>

      <form
        name="contact"
        method="POST"
        action="https://formspree.io/f/xyzypewl"
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
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number"
          className="w-full font-thin mb-3 px-4 py-2 border bg-transparent border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="w-full font-thin mb-4 px-4 py-2 border bg-transparent border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700"
        />

        <button
          type="submit"
          className="w-full py-2 bg-black text-white font-thin rounded-md hover:bg-neutral-900 transition duration-200"
        >
          Send
        </button>
      </form>

      {formStatus === 'success' && <p className="text-green-500 text-center">Form submitted successfully!</p>}
      {formStatus === 'error' && <p className="text-red-500 text-center">There was an error with the submission. Please try again.</p>}
    </div>
  );
};

export default Contact;