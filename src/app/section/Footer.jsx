
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone } from "react-icons/fa6";


const Foot = () => {
	const footerData = {
		columnData: [
			{
				title: "Support",
				list: ["Help Center", "Privacy Policy", "FAQ", "Terms & Condition", " Community"],
			},
			{
				title: "Contact",
				list: ["Jl. Umalas 1 No.3, Kerobokan Kelo, Lisbon", "+351 000 000 000", "support@domain.com"],
			},
		],
	};

	return (
		<section className="bg-darkPrimary text-gray-100 relative " >
			<div className="lg:w-10/12 mx-auto px-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-16 ">
					{footerData.columnData.map((col, colIndex) => (
						<ul
							key={colIndex}
							className="flex flex-col gap-5">
							<h1 className="text-gray-100 font-semibold text-2xl mb-5">{col.title}</h1>
							{col.list.map((data, index) => (
								<li
									key={index}
									className="text-gray-100 font-inter flex items-center gap-4">
									{colIndex === 1 ? (
										index === 0 ? (
											<FaLocationDot className="fill-primary" />
										) : index === 1 ? (
											<FaPhone className="fill-primary" />
										) : index === 2 ? (
											<FaEnvelope className="fill-primary" />
										) : (
											""
										)
									) : (
										""
									)}
									{data}
								</li>
							))}
						</ul>
					))}

				</div>

				<div className="flex md:flex-row flex-col gap-5 justify-between py-5 mt-10">
					<p className="text-gray-400">©2023 Lifecoach Landing Page - All Rights Reserved</p>
					<div>
						<a
							href=""
							className="bg-primary rounded-full p-2 inline-block mr-4">
							<FaFacebookF className="fill-white" />
						</a>
						<a
							href=""
							className="bg-primary rounded-full p-2 inline-block mr-4">
							<FaLinkedinIn className="fill-white" />
						</a>
						<a
							href=""
							className="bg-primary rounded-full p-2 inline-block mr-4">
							<FaInstagram className="fill-white" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Foot;