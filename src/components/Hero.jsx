import {HERO_CONTENT} from "../constants";
import profile_pic from "../assets/kevinRushProfile.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Mayur Hedaoo
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            React Native (Android) Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-thin tracking-tighter ">
                            {HERO_CONTENT}
                        </p>
                        
  <button className="relative px-6 py-2 mb-4 shadow-neutral-600 shadow-inner font-thin text-white bg-gradient-to-r from-neutral-800 via-neutral-800 to-neutral-900 rounded-lg">Check Out What I Offer <FontAwesomeIcon icon={faPaperPlane} className="text-gray-300 w-4 h-4 ml-2" /></button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src={profile_pic} />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;