import { PiChefHatFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="bg-black p-10 ">
        <div className="flex gap-4 items-center justify-center">
            <PiChefHatFill className="bg-yellow-500 w-14 h-14 rounded-full p-2"/>
            <div>
                <h1 className="text-2xl font-bold text-yellow-500">Via Samaria</h1>
                <p className="font-dancing-script font-bold text-xl text-white/70">Eatery & Bakery</p>
            </div>
        </div>
        <h1 className="flex items-center justify-center text-white/80 font-semibold py-4">Food is our love language, baking is our story</h1>
        <p className="flex items-center justify-center text-white/80 font-semibold">Copyright © {new Date().getFullYear()} - All right reserved</p>
    </div>
  )
}
