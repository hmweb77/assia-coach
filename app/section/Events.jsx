import HeadingText from "../components/HeadingText";

import backgroundOverlay from "../assets/Background-overlay.png";
import Image from "next/image";


const Events = () => {
  return (
    <section id="newsletter" className="bg-neutral">
      <div className="flex flex-col lg:flex-row   mx-auto px-10 relative py-24 "> 
        <Image
          src={backgroundOverlay}
          alt=""
          className="absolute inset-0 z-0 invisible lg:visible"
        />
        <div className="flex justify-between gap-10  flex-col z-10 bg-transparent">
          <HeadingText>
            {" "}
            Join Our Newsletter Community For Regular Inspiration
          </HeadingText>
          <form action="" className="">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-5 py-3   w-full  md:w-3/4 outline-none focus:ring-1 focus:ring-primary mb-3 md:mb-0"
            />
            <button
              type="button"
              className="text-gray-100 bg-primary px-5 py-3  hover:scale-105 active:scale-100 cursor-pointer  w-full  md:w-1/4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Events;
