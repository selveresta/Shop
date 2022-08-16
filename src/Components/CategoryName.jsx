import React from "react";
import classes from "./componentsStyle/CategoryName.module.css";

function CategotyName({ currentCategory }) {
	return <h1 className={classes.categoryName}>{currentCategory.toUpperCase()}</h1>;
}

export default CategotyName;
