import React from "react";
import classes from "./CategoryButton.module.css";

const CategoryButton = ({ children, ...props }) => {
	return (
		<button {...props} className={classes.CategoryButton}>
			{children}
		</button>
	);
};

export default CategoryButton;
