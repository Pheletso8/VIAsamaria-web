import { GiChefToque } from "react-icons/gi";
// Importing the gallery images
import g1 from '../assets/gallery1.jfif';
import g2 from '../assets/gallery2.jfif';
import g3 from '../assets/gallery3.jfif';
import g4 from '../assets/gallery4.jfif';
import g5 from '../assets/gallery5.jfif';
import g6 from '../assets/gallery6.jfif';

export default function Gallery() {
  const images = [g1, g2, g3, g4, g5, g6];

  return (
    <div id='gallery' className="bg-black py-12 px-4 md:px-12 lg:px-24">
      {/* Titles */}
      <h1 className="text-6xl text-white/70 font-bold text-center">
        Visual<span className="text-yellow-500 pl-2">Delights</span>
      </h1>

      <div className="flex items-center justify-center">
        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500 font-semibold justify-center mx-auto mt-6 text-black">
          <GiChefToque size={40} /> Fan Favorites
        </p>
      </div>

      <h4 className="text-xl text-white/70 font-dancing-script font-bold text-center py-8">
        A peek into our delicious world!
      </h4>

      {/* Modern Masonry Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((imgSrc, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl border-4 border-yellow-500 w-full"
          >
            <img
              src={imgSrc}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </div>
        ))}
      </div>

      {/* Google font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
        .font-dancing-script { font-family: 'Dancing Script', cursive; }`}
      </style>
    </div>
  );
}


