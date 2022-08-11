import React from "react";
import classes from "./buttonsStyle/CategoryButton.module.css";

const CategoryButton = ({ name, set }) => {
	return (
		<button
			onClick={() => {
				set(name);
			}}
			className={classes.CategoryButton}>
			{name}
		</button>
	);
};

export default CategoryButton;
