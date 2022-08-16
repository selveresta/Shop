import React, { useEffect, useState } from "react";
import classes from "./componentsStyle/ClotherItem.module.css";

const ClotherItem = ({ clother, currentCurrency, openPdp, set }) => {
	const [str, setStr] = useState("100");
	let index;

	const price = () => {
		let i = 0;
		clother.prices.forEach((element) => {
			if (element.currency.symbol === currentCurrency) {
				index = i;
				return i;
			}
			i++;
		});
	};

	useEffect(() => {
		price();
		setStr(clother.prices[index].amount + " " + currentCurrency);
	}, [currentCurrency]);

	return (
		<div
			onClick={() => {
				openPdp();
				set(clother.id);
			}}
			className={classes.clotherItem}>
			<div className={classes.imgItem}>
				<img alt='img' className={classes.imagePic} src={clother.gallery[0]}></img>
			</div>
			<div className={classes.nameItem}>
				<p>{clother.name}</p>
			</div>
			<div className={classes.priceItem}>{str}</div>
		</div>
	);
};

export default ClotherItem;
