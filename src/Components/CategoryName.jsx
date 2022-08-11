import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_CATEGORIES_NAMES } from "../Data/Query";
import classes from "./componentsStyle/CategoryName.module.css";

function CategotyName({ currentCategory }) {
	return <h1 className={classes.categoryName}>{currentCategory.toUpperCase()}</h1>;
}

export default CategotyName;
