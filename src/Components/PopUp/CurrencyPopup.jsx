import React from "react";
import Vector from "../../images/Vector.png";
import Popup from "reactjs-popup";
import classes from "./stylesPopUp/CurrencyPopUp.module.css";
import CurrencyButton from "../UI/buttons/CurrencyButton";

const CurrencyPopup = ({ props, set }) => {
	return (
		<Popup
			trigger={
				<button className={classes.currencyButton}>
					{" "}
					<img alt='img' src={Vector}></img>
				</button>
			}
			position='bottom right'
			closeOnDocumentClick>
			{" "}
			<div className={classes.currencyContent}>
				{props.map((btn, index) => (
					<CurrencyButton set={set} key={index + 1} props={btn}></CurrencyButton>
				))}
			</div>
		</Popup>
	);
};

export default CurrencyPopup;
