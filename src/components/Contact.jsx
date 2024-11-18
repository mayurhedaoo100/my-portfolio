import {CONTACT} from "../constants";
import { motion } from "framer-motion";

const Contact = () =>{
    return(
        <div className="boder-b border-neutral-900 pb-20">
            <motion.h2
            initial={{y: -100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration: 0.5}}
            className="my-10 text-center text-4xl">Get in Touch</motion.h2>

<form name="contact" method="POST" data-netlify="true" action="/thank-you"
 class="max-w-lg mx-auto p-6">
<input type="hidden" name="form-name" value="contact" />
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Your Name"
      required
      class="w-full font-thin mb-3 px-4 py-2 border bg-transparent border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700"
    />

<input
      type="tel"
      id="phone"
      name="phone"
      placeholder="Phone number"
      class="w-full font-thin mb-3 px-4 py-2 border bg-transparent border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700"
    />
  
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      required
      class="w-full font-thin mb-4 px-4 py-2 border bg-transparent border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700"
    />

  <button
    type="submit"
    class="w-full py-2 bg-black text-white font-thin rounded-md hover:bg-neutral-900 transition duration-200"
  >
    Send
  </button>
</form>


            <div className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <a href="mailto:mayurh100@gmail.com" className="border-b">{CONTACT.email}</a>
            </div>
        </div>
    )
}

export default Contact;