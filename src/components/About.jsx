import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { FaPaintBrush } from "react-icons/fa";

const About = () => {
    return (
        <div>
            <motion.h2
            initial={{y: -100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1 , x:0}}
                transition={{duration:1, delay: 0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg}/>
                    </div>
                </motion.div>
                <motion.div
                initial={{opacity:0, x:100}}
                whileInView={{opacity:1 , x:0}}
                transition={{duration:1, delay: 0.5}}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center font-light lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                    <p className="italic font-light mb-4">
                    "I specialize in photo editing and manipulation using Photoshop. I enhance images, create unique visual effects, and bring creative ideas to life."
      </p>

      {/* Instagram Link Box with Framer Motion */}
      <motion.a
        href="https://www.instagram.com/thevfxstore"
        target="_blank"
        className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-light py-2 px-4 rounded-lg"
        whileHover={{
          scale: 1.05, // Scale up on hover
          backgroundColor: "#6EE7B7", // Change color
        }}
        whileTap={{ scale: 0.95 }} // Slight shrink effect when clicked
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaPaintBrush className="inline-block text-lg mr-2" /> View My Designs on Instagram
      </motion.a>
                </motion.div>
            </div>
        </div>
    )
}

export default About;