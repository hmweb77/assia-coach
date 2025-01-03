import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";
import fourNHalfStar  from "../assets/four-half-star.png";
import TestimonialCard from "../components/TestimonialCard";
import Image from "next/image";


const Testimonials = () => {
	const testimonialData = [
		{
			name: "Sophia Miller",
			jobTitle: "Project Manager",
			comment:
				"Fiona's leadership coaching transformed the way I approach team dynamics. Her insights on decision-making and emotional intelligence have not only improved my confidence but also enhanced my team's productivity. I’m truly grateful for her guidance.",
		},
		{
			name: "Olivia Thompson",
			jobTitle: "Entrepreneur",
			comment:
				"Fiona's tailored coaching sessions helped me overcome challenges in leading my growing business. Her strategies for effective communication and resilience in leadership have been invaluable. I feel more equipped to lead with purpose and clarity.",
		},
		{
			name: "Emily Carter",
			jobTitle: "HR Specialist",
			comment:
				"Working with Fiona was a game-changer for my career. Her workshops on conflict resolution and team collaboration provided me with actionable tools that I use daily. I highly recommend her to anyone looking to elevate their leadership skills.",
		},
		{
			name: "Isabella Davis",
			jobTitle: "Team Leader",
			comment:
				"Fiona's coaching style is inspiring and practical. She helped me identify my strengths as a leader and showed me how to leverage them effectively. Her approach to goal-setting and motivation has been transformative for both me and my team.",
		},
	];
	
	return (
		<section className="">
			<div className="flex gap-10 lg:flex-row flex-col px-10 lg:w-11/12 mx-auto py-24">
				<div className="lg:w-1/2 ">
					<HeadingText extraStyle="pr-12">See What Our Clients Have Achieved and Get Inspired to Reach Your Own Goals</HeadingText>

					<Image
						src={fourNHalfStar}
						alt="4.5 star rating"
						className="mt-20 mb-2"
					/>
					<ParagraphText>
						4.5 out of 5 stars <span>from over 100 reviews</span>
					</ParagraphText>
				</div>
				<div className="lg:w-1/2  grid gap-10">
					{testimonialData.map((item, index) => (
						<TestimonialCard
							key={index}
							{...item}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
