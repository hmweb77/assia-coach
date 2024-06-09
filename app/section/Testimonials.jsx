import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";
import fourNHalfStar  from "../assets/four-half-star.png";
import TestimonialCard from "../components/TestimonialCard";
import Image from "next/image";


const Testimonials = () => {
	const testimonialData = [
		{
			name: "Howard Woods",
			jobTitle: "Lead Developer",
			comment:
				"I struggled with public speaking until I started working with Joanna. Her coaching on presentations and cultural differences was eye-opening. Learning how to give and receive constructive feedback has also improved my relationships at work. I can't thank her enough for her guidance.",
		},
		{
			name: "Pamela Allen",
			jobTitle: "Entrepreneur",
			comment:
				"Joanna's coaching on public speaking and presentations was incredibly effective. Her tips on navigating cultural differences and giving constructive feedback have enhanced my communication skills significantly. I feel more confident and competent in my professional interactions.",
		},
	
		{
			name: "Joshua Hawkins",
			jobTitle: "Influencer",
			comment:
				"The coaching I received from Joanna on career change and motivation was outstanding. She provided practical advice for gaining recognition and managing difficult conversations. I now approach these challenges with confidence and a clear strategy. Her coaching made all the difference.",
		},
		{
			name: "Lisa Guerrero",
			jobTitle: "Head of Marketing",
			comment:
				"Joanna's coaching on time management and planning has been a game-changer. Her strategies for project management and team leadership have streamlined our processes, and I feel more in control of my workload than ever before. Highly recommend her sessions!",
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
