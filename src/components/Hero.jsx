import { HERO_CONTENT } from "../constants";
import profile_pic from "../assets/profile.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { delay, motion } from "framer-motion"
import { Container } from "postcss";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: {duration:0.5, delay: delay }, }
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <DotLottieReact className="h-32 w-auto fixed lg:hidden top-2/3 -right-24 transform -translate-y-1/2"
      src="https://lottie.host/9aab9c7d-2b81-4486-83c2-b58538558682/qsJLCNjYiD.lottie"
      loop
      autoplay
    />
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden" animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Mayur Hedaoo
                        </motion.h1>
                        <motion.span
                            variants={container(0.35)}
                            initial="hidden" animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            React Native (Android) Developer
                        </motion.span>
                        <motion.p
                            variants={container(0.7)}
                            initial="hidden" animate="visible"
                            className="my-2 max-w-xl py-6  font-thin tracking-tighter ">
                            {HERO_CONTENT}
                        </motion.p>

                        <a href="#projects"><motion.button 
                        variants={container(0.95)}
                        initial="hidden" animate="visible"
                        className="relative px-6 py-2 mb-6 shadow-neutral-600 shadow-inner font-thin text-white bg-gradient-to-r from-neutral-800 via-neutral-800 to-neutral-900 rounded-lg">Go to my Featured Projects <FontAwesomeIcon icon={faPaperPlane} className="text-gray-300 w-4 h-4 ml-2" /></motion.button></a>
                    </div>
                    <DotLottieReact className="h-32 w-auto lg:block hidden"
      src="https://lottie.host/9aab9c7d-2b81-4486-83c2-b58538558682/qsJLCNjYiD.lottie"
      loop
      autoplay
    />
                    
                </div>
                
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        
                        <motion.img initial={{ x: 100, opacity: 0 }} className="rounded-xl"
                            animate={{ x: 0, opacity: 1 }} transition={{ duration:0.5, delay: 1.3 }}
                            src={profile_pic} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;