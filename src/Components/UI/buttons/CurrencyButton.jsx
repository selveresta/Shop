import React from "react";
import classes from "./buttonsStyle/CurrencyButton.module.css";

function CurrencyButton({ set, props }) {
	return (
		<button
			onClick={() => {
				set(props.symbol);
			}}
			className={classes.currencyContentItem}>
			<span className={classes.currencySpan}>{props.symbol}</span> {props.label}
		</button>
	);
}

export default CurrencyButton;
