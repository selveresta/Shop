import React, { useState } from "react";
import CategoryButton from "./UI/buttons/CategoryButton";
import logo from "../images/logo.png";
import CurrencyPopup from "./PopUp/CurrencyPopup";
import CartPopUp from "./PopUp/CartPopUp";
import classes from "./componentsStyle/Header.module.css";

const Header = ({ categories, currencies, newCurrentCurrency, currency, newCategory, closeModal, cartProducts }) => {
	const [ariaHidden, setAraiHidden] = useState("true");
	function showOverlay() {
		if (ariaHidden === "true") {
			setAraiHidden("false");
		} else setAraiHidden("true");
	}

	return (
		<div>
			<header id={classes.main} className={classes.mainHeader}>
				<nav className={classes.buttonsHeader}>
					{categories.map((category, index) => (
						<CategoryButton
							name={category.name}
							set={newCategory}
							key={index + 1}
							closeModal={closeModal}></CategoryButton>
					))}
				</nav>
				<img id={classes.logo} alt='logo' src={logo}></img>
				<div className={classes.currencyCart}>
					<span className={classes.currency}>{currency}</span>
					<CurrencyPopup set={newCurrentCurrency} props={currencies}></CurrencyPopup>
					<CartPopUp currency={currency} cartProducts={cartProducts} showOverlay={showOverlay}></CartPopUp>
				</div>
			</header>
			<div className={classes.overlay} aria-hidden={ariaHidden}></div>
		</div>
	);
};

export default Header;
