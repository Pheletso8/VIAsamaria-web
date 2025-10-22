import { PiChefHatFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Navbar() {  
  return (
    <div>
        {/*Desktop navbar*/}
        <div className="justify-between items-center p-5 md:flex hidden px-8">

            {/* Logo and title*/}
            <div className="flex gap-4 items-center">
                <PiChefHatFill className="bg-yellow-500 w-14 h-14 rounded-full p-2"/>
                <div>
                    <h1 className="text-2xl font-bold">Via Samaria</h1>
                    <p className="font-dancing-script font-bold text-xl text-white/70">Eatery & Bakery</p>
                </div>
            </div>

            {/*Navigation links*/}
            <div className="flex gap-4 font-semibold text-white text-lg">
                <a href="#about" className=" hover:bg-yellow-500 rounded-full p-4 hover:text-black delay-150 ease-in text-white/70">About</a>
                <a href="#gallery" className=" hover:bg-yellow-500 rounded-full p-4 hover:text-black delay-150 ease-in text-white/70">Gallery</a>
                <a href="#contact" className=" hover:bg-yellow-500 rounded-full p-4 hover:text-black delay-150 ease-in text-white/70">Contact Us</a>
            </div>

            {/*Order button**/}
            <div>
                <button onClick={()=>document.getElementById('my_modal_1').showModal()}
                className="flex gap-4 items-center bg-yellow-500 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
                    <IoLogoWhatsapp />
                    Order now
                </button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box bg-yellow-500">
                        <h3 className="font-bold text-2xl">Thank you for wanting to order!</h3>
                        <p className="py-4 font-semibold">Please WhatApp or Call this number : <span className="font-bold">071 686 8381</span></p>
                        <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-black text-white/70">Close</button>
                        </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>



        {/*Mobile navbar*/}
        <div className=" flex md:hidden justify-between p-5 px-8 items-center">
            {/* Logo and title*/}
            <div className="flex gap-4 items-center">
                <PiChefHatFill className="bg-yellow-500 w-10 h-10 rounded-full p-2"/>
                <div>
                    <h1 className="text-xl font-bold text-yellow-500">Via Samaria</h1>
                    <p className="font-dancing-script font-bold text-xl text-white/70">Eatery & Bakery</p>
                </div>
            </div>


            {/*Order button**/}
            <div>
                <button onClick={()=>document.getElementById('my_modal_2').showModal()}
                className="flex gap-2 items-center bg-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
                    <IoLogoWhatsapp />
                    Order now
                </button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box bg-yellow-500">
                        <h3 className="font-bold text-2xl">Thank you for wanting to order!</h3>
                        <p className="py-4 font-semibold">Please WhatApp or Call this number : <span className="font-bold">071 686 8381</span></p>
                        <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-black text-white/70">Close</button>
                        </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>

        {/*Google font*/}
        <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
            .font-dancing-script { font-family: 'Dancing Script', cursive; }`}
        </style>
    </div>
  )
}
