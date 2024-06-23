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
					Hello, I'm Joanna. I’m a graduate Social Psychologist with extensive experience in Team Management within international corporations and Non-Profit organizations. Currently, I am working as a Project Manager for global projects, bringing innovative solutions to complex challenges.
					In my free time, I share my knowledge and experience by managing Public Speaking Clubs as the Division Director at Toastmasters Lisbon. This role allows me to connect with individuals passionate about personal development and effective communication.
					</ParagraphText>

				</div>
			</div>
		</section>
	);
};

export default About;
