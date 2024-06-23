import React from "react";



const ParagraphText = ({ children, extraStyle }) => {
	return <p className={`opacity-60 text-lg leading-8 font-inter ${extraStyle}`}>{children}</p>;
};

export default ParagraphText;
