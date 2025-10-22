import Navbar from "./Navbar";
import bgImage from "../assets/hero.jpg";
import { FaArrowRight } from "react-icons/fa";
import { BsFillMouseFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/70 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center h-[80vh] text-white md:justify-end">
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg text-white/70">Where flavour</h3>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg text-yellow-500">Meets Heart</h3>
          <p className="text-xl md:text-2xl lg:text-4xl mb-6 drop-shadow-md px-4 font-dancing-script text-white/70">
            Edible hugs served daily. From sunrise scrambles to muffins that steal the spotlight.
          </p>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="flex justify-center items-end animate-bounce [animation-duration:3s] ease-in-out pb-10">
        <BsFillMouseFill size={30} color="grey"/>
      </div>
      {/*Google font*/}
        <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
            .font-dancing-script { font-family: 'Dancing Script', cursive; }`}
        </style>
    </div>
  );
}
