import { GiChefToque } from "react-icons/gi";
// Importing the gallery images
import g1 from '../assets/gallery1.jfif'
import g2 from '../assets/gallery2.jfif'
import g3 from '../assets/gallery3.jfif'
import g4 from '../assets/gallery4.jfif'
import g5 from '../assets/gallery5.jfif'
import g6 from '../assets/gallery6.jfif'

export default function Gallery() {
  return (
    <div id='gallery' className="bg-black py-12">
      <h1 className="text-6xl text-white/70 font-bold text-center">
        Visual<span className="text-yellow-500 pl-2">Delights</span>
      </h1>

      <div className="flex items-center justify-center">
        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500 font-semibold justify-center mx-auto mt-6">
          <GiChefToque size={40} /> Fan Favorites
        </p>
      </div>

      <h4 className="text-xl text-white/70 font-dancing-script font-bold text-center py-8">
        A peek into our delicious world!
      </h4>

      {/* Gallery Rows */}
      <div className="flex gap-4 p-4">
        {/* Left large image */}
        <div className="w-2/3 relative group overflow-hidden rounded-xl border-4 border-yellow-500">
          <img
            src={g1}
            alt="menu image"
            className="block w-full h-[700px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        </div>

        {/* Right stacked smaller images */}
        <div className="w-1/3 flex flex-col gap-4">
          {[g2, g3].map((imgSrc, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl border-4 border-yellow-500">
              <img
                src={imgSrc}
                alt="menu image"
                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 p-4">
        <div className="w-1/3 flex flex-col gap-4">
          {[g5, g6].map((imgSrc, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl border-4 border-yellow-500">
              <img
                src={imgSrc}
                alt="menu image"
                className="w-full h-[345px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Right large image */}
        <div className="w-2/3 relative group overflow-hidden rounded-xl border-4 border-yellow-500">
          <img
            src={g4}
            alt="menu image"
            className="block w-full h-[680px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        </div>
      </div>

      {/* Google font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
        .font-dancing-script { font-family: 'Dancing Script', cursive; }`}
      </style>
    </div>
  );
}