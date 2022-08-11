import React, { useEffect, useState } from "react";
import CategoryButton from "./UI/buttons/CategoryButton";
import logo from "../images/logo.png";
import CurrencyPopup from "./PopUp/CurrencyPopup";
import CartPopUp from "./PopUp/CartPopUp";
import classes from "./componentsStyle/Header.module.css";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../Data/Query";

const Header = ({ categories, currencies, newCurrentCurrency, currentCurrency, newCategory }) => {
	return (
		<header className={classes.mainHeader}>
			<nav className={classes.buttonsHeader}>
				{categories.map((category, index) => (
					<CategoryButton name={category.name} set={newCategory} key={index + 1}></CategoryButton>
				))}
				{/* <CategoryButton>Woman</CategoryButton>
				<CategoryButton>Man</CategoryButton>
				<CategoryButton>Kids</CategoryButton> */}
			</nav>
			<img id={classes.logo} alt='logo' src={logo}></img>
			<div className={classes.currencyCart}>
				<span className={classes.currency}>{currentCurrency}</span>
				<CurrencyPopup set={newCurrentCurrency} props={currencies}></CurrencyPopup>
				<CartPopUp></CartPopUp>
			</div>
		</header>
	);
};

export default Header;
