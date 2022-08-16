import React from "react";
import classes from "./buttonsStyle/CategoryButton.module.css";

const CategoryButton = ({ name, set, closeModal }) => {
	return (
		<button
			onClick={() => {
				set(name);
				closeModal();
			}}
			className={classes.CategoryButton}>
			{name}
		</button>
	);
};

export default CategoryButton;
