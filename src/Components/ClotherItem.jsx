import React from "react";
import classes from "./componentsStyle/ClotherItem.module.css";

const ClotherItem = (props) => {
	const str = props.clother.prices[0].amount + props.clother.prices[0].currency.symbol;

	return (
		<div className={classes.clotherItem}>
			<div className={classes.imgItem}>
				<img alt='img' className={classes.imagePic} src={props.clother.gallery[0]}></img>
			</div>
			<div className={classes.nameItem}>
				<p>{props.clother.name}</p>
			</div>
			<div className={classes.priceItem}>{str}</div>
		</div>
	);
};

export default ClotherItem;
