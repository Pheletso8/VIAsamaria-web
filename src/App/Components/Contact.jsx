import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { RiEBike2Fill } from "react-icons/ri";
import { FaClock } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Contact() {
  return (
    <div id='contact' className="bg-black/12 pb-6">
      <div className="p-8 text-center">
        <h1 className="text-7xl font-bold py-4">
          Get in <span className="text-yellow-500">Touch</span>
        </h1>
        <p className="text-2xl py-2">We're here to serve you</p>
      </div>

      <div className="flex flex-col md:flex-row px-4 items-center justify-center gap-20">
        {/* LEFT SIDE */}
        <div>
          {/* PHONE */}
          <div className="flex items-center gap-4 py-2">
            <div className="bg-black rounded-full p-3 flex items-center justify-center shadow-md shadow-yellow-500/30">
              <FaPhoneSquareAlt color="#fdd835" size={30} />
            </div>
            <div className="font-semibold">
              <h1 className="text-xl">Call or WhatsApp Us</h1>
              <p>071 686 8381</p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4 py-2">
            <div className="bg-black rounded-full p-3 flex items-center justify-center shadow-md shadow-yellow-500/30">
              <IoIosPin color="#fdd835" size={30} />
            </div>
            <div className="font-semibold">
              <h1 className="text-xl">Visit Us</h1>
              <p>No.2 Henri Street</p>
              <p>Braamfontein</p>
            </div>
          </div>

          {/* DELIVERY */}
          <div className="flex items-center gap-4 py-2">
            <div className="bg-black rounded-full p-3 flex items-center justify-center shadow-md shadow-yellow-500/30">
              <RiEBike2Fill color="#fdd835" size={30} />
            </div>
            <div className="font-semibold">
              <h1 className="text-xl">Delivery Available</h1>
              <p>We deliver around Braamfontein</p>
              <p>Fast & fresh to your door</p>
            </div>
          </div>

          {/* HOURS */}
          <div className="flex items-center gap-4 py-2">
            <div className="bg-black rounded-full p-3 flex items-center justify-center shadow-md shadow-yellow-500/30">
              <FaClock color="#fdd835" size={30} />
            </div>
            <div className="font-semibold">
              <h1 className="text-xl">Opening Hours</h1>
              <p>Monday - Saturday: 7:00 AM - 6:00 PM</p>
              <p>Sunday: 8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="card bg-yellow-500 text-primary-content w-96 rounded-2xl shadow-lg shadow-yellow-500/40">
            <div className="card-body">
              <h2 className="card-title text-black font-bold text-4xl">Order Now</h2>
              <p className="py-8 text-black font-semibold">
                Ready to experience the taste of joy? Send us a message on WhatsApp and we'll take care of the rest!
              </p>
              <div className="card-actions justify-end">
                <button onClick={()=>document.getElementById('my_modal_1').showModal()}
                className="btn bg-black text-white/80 hover:bg-yellow-700 transition">
                  <IoLogoWhatsapp size={22} className="mr-2" /> Chat on WhatsApp
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
