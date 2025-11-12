import { FaHeart } from "react-icons/fa6";
import { CiCoffeeCup } from "react-icons/ci";
import { BiSolidCookie } from "react-icons/bi";
import { FaBirthdayCake, FaHandHoldingHeart } from "react-icons/fa";
import Card1 from "../Assets/card1.jpg";
import Card2 from "../Assets/card2.jpg";
import Card3 from "../Assets/card3.jpg";
import Card4 from "../Assets/card4.jpg";

export default function About() {
  const cards = [
    {
      img: Card1,
      title: "Fresh Daily",
      desc: "Baked with love every morning.",
      Icon: CiCoffeeCup,
    },
    {
      img: Card2,
      title: "Homemade Pastries",
      desc: "Sweet treats for every craving.",
      Icon: BiSolidCookie,
    },
    {
      img: Card3,
      title: "Premium",
      desc: "Handcrafted and oven-fresh.",
      Icon: FaBirthdayCake,
    },
    {
      img: Card4,
      title: "Coffee & Croissants",
      desc: "Perfect mornings start here.",
      Icon: FaHandHoldingHeart,
    },
  ];

  return (
    <div id="about" className="min-h-screen bg-black/8 text-white py-12">
      {/* Header Section */}
      <div className="flex items-center justify-center pt-4">
        <p className="flex text-center items-center justify-center gap-2 px-4 py-2 rounded-full bg-yellow-500 font-semibold text-black">
          <FaHeart /> Our Story
        </p>
      </div>

      <h1 className="text-4xl md:text-6xl text-center mb-10 font-bold mt-4 text-black/90">
        Welcome to a{" "}
        <span className="text-yellow-500">Taste of Joy!</span>
      </h1>

      {/* Story Text & Cards Section */}
      <div className="flex flex-col 2xl:flex-row items-center justify-center gap-12">
        {/* Text Section */}
        <p className="max-w-3xl mx-4 md:mx-auto text-center text-lg md:text-xl lg:text-2xl leading-relaxed px-6 md:px-10 py-8 bg-black/40 rounded-2xl shadow-lg backdrop-blur-sm font-semibold">
          Step into a world where flavor meets heart! At our restaurant and
          bakery, we believe every meal should be a celebration and every bite a
          memory.
          <br />
          <br />
          We don't just serve meals — we serve
          <span className="text-yellow-400 bg-black/70 px-2 py-1 rounded-full font-semibold mx-2">
            edible hugs
          </span>
          . From sunrise scrambles to lunches that'll make your taste buds
          dance, our kitchen is where comfort food meets culinary adventure.
          Come for the flavor, stay for the second helping (and maybe a third…
          we won't judge).
          <br />
          <br />
          Our oven-fresh goodies are baked with love, a pinch of sass, and a
          whole lot of butter. Whether you're craving soft scones that hug your
          taste buds back or muffins that steal the spotlight, we've got your
          sweet tooth covered.
          <br />
          <br />
          <span className="font-bold text-yellow-400 text-xl md:text-2xl">
            Food is Our Love Language — baking is our story.
          </span>
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center max-w-4xl w-full px-6">
          {cards.map(({ img, title, desc, Icon }, index) => (
            <div
              key={index}
              className="card bg-base-100 image-full w-full max-w-sm transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500 hover:shadow-lg"
            >
              <figure>
                <img
                  src={img}
                  alt={title}
                  className="object-cover w-full h-64 md:h-72 rounded-lg"
                />
              </figure>
              <div className="card-body flex flex-col items-center justify-center text-center">
                <h2 className="card-title text-2xl md:text-3xl text-yellow-500 font-bold">
                  {title}
                </h2>
                <p className="font-dancing-script text-lg md:text-xl text-white/80">
                  {desc}
                </p>
                <div className="card-actions justify-center mt-3">
                  <Icon
                    size={55}
                    className="text-yellow-400 drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
        .font-dancing-script { font-family: 'Dancing Script', cursive; }`}
      </style>
    </div>
  );
}

