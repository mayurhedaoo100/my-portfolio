import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-a">
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
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;