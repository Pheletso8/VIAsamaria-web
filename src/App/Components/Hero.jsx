import bgImage from "../assets/scones.jfif";
import { BsFillMouseFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div
      className="relative min-h-screen bg-contain bg-top bg-no-repeat bg-black flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col grow">
        <div className="flex flex-col items-center justify-center text-center grow text-white px-4 sm:px-6 md:px-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 drop-shadow-lg text-white/80">
            Where flavour
          </h3>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg text-yellow-500">
            Meets Heart
          </h3>
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 drop-shadow-md max-w-2xl font-dancing-script text-white/80">
            Edible hugs served daily. From sunrise scrambles to muffins that steal the spotlight.
          </p>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="flex justify-center items-end animate-bounce [animation-duration:3s] ease-in-out pb-10 relative z-10">
        <BsFillMouseFill size={28} className="text-gray-300 sm:text-gray-200" />
      </div>

      {/* Google Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
        .font-dancing-script { font-family: 'Dancing Script', cursive; }`}
      </style>
    </div>
  );
}
