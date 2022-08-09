import React from "react";
import classes from "./componentsStyle/ClotherItem.module.css";

const ClotherItem = (props) => {
	return (
		<div className={classes.clotherItem}>
			<div className={classes.imgItem}>
				<a className={classes.clotherLink} href={props.clother.link}>
					<img alt='img' className={classes.imagePic} src={props.clother.pic}></img>
				</a>
			</div>
			<div className={classes.nameItem}>
				<a className={classes.clotherLink} href={props.clother.link}>
					<p>{props.clother.name}</p>
				</a>
			</div>
			<div className={classes.priceItem}>
				<a className={classes.clotherLink} href={props.clother.link}>
					<p>{props.clother.price}</p>
				</a>
			</div>
		</div>
	);
};

export default ClotherItem;
