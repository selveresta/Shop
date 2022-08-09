import React from "react";
import CategoryButton from "./UI/buttons/CategoryButton";
import logo from "../images/logo.png";
import CurrencyPopup from "./PopUp/CurrencyPopup";
import CartPopUp from "./PopUp/CartPopUp";
import classes from "./componentsStyle/Header.module.css";

const Header = () => {
	return (
		<header className={classes.mainHeader}>
			<nav className={classes.buttonsHeader}>
				<CategoryButton>Woman</CategoryButton>
				<CategoryButton>Man</CategoryButton>
				<CategoryButton>Kids</CategoryButton>
			</nav>
			<img id={classes.logo} alt='logo' src={logo}></img>
			<div className={classes.currencyCart}>
				<span className={classes.currency}>$</span>
				<CurrencyPopup></CurrencyPopup>
				<CartPopUp></CartPopUp>
			</div>
		</header>
	);
};

export default Header;
