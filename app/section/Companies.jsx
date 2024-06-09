import luminous from "../assets/Luminous.png.png"
import minty from "../assets/Minty.png.png"
import nextmove from "../assets/Nextmove.png.png"
 import vision from "../assets/Visionpng.png"
 import Image from "next/image"

const Companies = () => {
	const companies = [luminous, minty, nextmove, vision]
	return (
		<section>
			<div className="flex md:flex-row flex-col px-10 gap-16 md:gap-10 py-24  lg:w-11/12 mx-auto">
				<h1 className="text-2xl font-semibold font-publicSans">
					Trusted by 100+ <br /> companies
				</h1>
				<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
					{companies.map((company, index) => (
						<li
							key={index}
							className="grid place-items-center">
							<Image
								src={company}
								alt=""
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Companies;
