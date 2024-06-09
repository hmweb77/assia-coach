import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";
import Image from "next/image";
import Button from "../components/Button";
import her from "../assets/heroImg.jpg";

const Hero = () => {
  return (
    <section className="bg-neutral">
      <div className="flex flex-col lg:h-screen gap-10 lg:gap-0  lg:flex-row  ">
        <div className="md:px-20 px-10 py-24  flex justify-center items-center   flex-col gap-10  lg:bg-center lg:basis-8/12 relative bg-transparent">
          <HeadingText extraStyle="z-10 bg-transparent w-full xl:text-6xl">
            Discover Your Inner <br /> Strength and Create <br /> a Life You
            Love
          </HeadingText>
          <ParagraphText extraStyle="lg:pr-24 bg-transparent">
            We will guide you through a transformational journey, helping you
            enhance your leadership skills, navigate career changes, and master
            communication for a fulfilling and successful life.
          </ParagraphText>
          <p className="flex gap-4 items-center w-full font-inter text-lg font-medium bg-transparent z-10">
            <Button>Contact Us</Button>
          </p>
        </div>
        <Image
          src={her}
          className="lg:basis-4/12  md:h-[805px] md:w-[650px] lg:h-auto lg:w-auto mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
