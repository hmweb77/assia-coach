import Image from "next/image";
import  aboutImg1 from "../assets/aboutImg1.png";
import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";


const About = () => {
	return (
		<section id="about" className=" px-10  mx-auto  ">
			<div className="flex lg:flex-row flex-col justify-center  gap-20 items-center py-14">
				<Image
					src={aboutImg1}
					alt="coach image"
				/>
				<div className="h-full  flex flex-col gap-10">
					<HeadingText>
						Helping You Create A Life <br /> that Aligns with Your Values <br /> and Passions
					</HeadingText>
					<ParagraphText>
					Hello, I'm Fiona , a certified Leadership Coach with a degree in Organizational Psychology and a passion for empowering individuals to reach their full potential. With years of experience in leadership development and team dynamics, I help professionals build confidence, improve communication, and lead with authenticity and impact.

My approach combines proven strategies with a deep understanding of personal growth, allowing my clients to overcome challenges, inspire their teams, and achieve meaningful results. Outside of coaching, I lead workshops and speak at events on topics such as emotional intelligence, resilience, and transformative leadership.</ParagraphText>

				</div>
			</div>
		</section>
	);
};

export default About;
