import { FaHeart } from "react-icons/fa6";
import { CiCoffeeCup } from "react-icons/ci";
import { BiSolidCookie } from "react-icons/bi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import Card1 from "../Assets/card1.jpg";
import Card2 from "../Assets/card2.jpg";
import Card3 from "../Assets/card3.jpg";
import Card4 from "../Assets/card4.jpg";

export default function About() {
  return (
    <div id='about' className="min-h-screen bg-black/8">
        <div className="flex items-center justify-center pt-8">
            <p className="flex text-center items-center justify-center gap-2 p-2 rounded-full bg-yellow-500 font-semibold"><FaHeart /> Our Story</p>
        </div>
        <h1 className="text-6xl text-center mb-12 font-bold mt-4">Welcome to a <span className="text-yellow-500">Taste of Joy!</span></h1>
        <div className="flex flex-col 2xl:flex-row">
            <p className="max-w-3xl mx-2 md:mx-auto  md:text-center text-white text-lg lg:text-2xl leading-relaxed px-10 md:px-12 py-8 bg-black/40 rounded-2xl shadow-lg backdrop-blur-sm font-semibold mb-8">
            Step into a world where flavor meets heart! At our restaurant and bakery, 
            we believe every meal should be a celebration and every bite a memory.
            <br /><br />
            We don't just serve meals — we serve 
            <span className="text-yellow-400 bg-black/70 px-2 py-1 rounded-full font-semibold mx-2">
                edible hugs
            </span>. 
            From sunrise scrambles to lunches that'll make your taste buds dance, our kitchen is where comfort food meets culinary adventure. 
            Come for the flavor, stay for the second helping (and maybe a third… we won't judge).
            <br /><br /> 
            Our oven-fresh goodies are baked with love, a pinch of sass, and a whole lot of butter. 
            Whether you're craving soft scones that hug your taste buds back or muffins that steal the spotlight, we've got your sweet tooth covered.
            <br /><br />
            <span className="font-bold text-yellow-400 text-xl">
                Food is Our Love Language — baking is our story.
            </span>
            </p>

            <div className="flex justify-center items-center py-12 bg-transparent">
                <div className="grid grid-cols-2 gap-6 justify-items-center max-w-4xl w-full px-6">

                    {/* Card 1 */}
                    <div className="card bg-base-100 image-full w-full max-w-sm transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500 hover:shadow-lg">
                    <figure>
                        <img src={Card1} alt="Fresh Daily" className="object-cover w-full h-64" />
                    </figure>
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <h2 className="card-title text-3xl text-yellow-500">Fresh Daily</h2>
                        <p className="font-dancing-script text-xl text-white/70">Baked with love every morning.</p>
                        <div className="card-actions justify-center mt-3">
                        <CiCoffeeCup size={60} color={"#ffeb3b"} />
                        </div>
                    </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-base-100 image-full w-full max-w-sm transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500 hover:shadow-lg">
                    <figure>
                        <img src={Card2} alt="Homemade Pastries" className="object-cover w-full h-64 hover:scale-102" />
                    </figure>
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <h2 className="card-title text-3xl text-yellow-500">Homemade Pastries</h2>
                        <p className="font-dancing-script text-xl text-white/70">Sweet treats for every craving.</p>
                        <div className="card-actions justify-center mt-3">
                        <BiSolidCookie size={60} color={"#ffeb3b"} />
                        </div>
                    </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-base-100 image-full w-full max-w-sm transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500 hover:shadow-lg">
                    <figure>
                        <img src={Card3} alt="Artisan Bread" className="object-cover w-full h-64" />
                    </figure>
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <h2 className="card-title text-3xl text-yellow-500">Premium</h2>
                        <p className="font-dancing-script text-xl text-white/70">Handcrafted and oven-fresh.</p>
                        <div className="card-actions justify-center mt-3">
                        <FaBirthdayCake size={60} color={"#ffeb3b"} />
                        </div>
                    </div>
                    </div>

                    {/* Card 4 */}
                    <div className="card bg-base-100 image-full w-full max-w-sm transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500 hover:shadow-lg">
                    <figure>
                        <img src={Card4} alt="Coffee & Croissants" className="object-cover w-full h-64" />
                    </figure>
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <h2 className="card-title text-3xl text-yellow-500">Coffee & Croissants</h2>
                        <p className="font-dancing-script text-xl text-white/70">Perfect mornings start here.</p>
                        <div className="card-actions justify-center mt-3">
                        <FaHandHoldingHeart size={60} color={"#ffeb3b"} />
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
