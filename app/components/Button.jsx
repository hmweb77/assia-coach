import React from "react";



const Button = ({ children, width, zIndex }) => {
	return (
		<button
			className={`${width} ${zIndex} bg-primary px-6 py-3 hover:scale-105 active:scale-100 hover:bg-opacity-80 rounded-md text-white`}>
			{children}
		</button>
	);
};

export default Button;
