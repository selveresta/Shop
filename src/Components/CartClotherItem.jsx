import React, { useState } from "react";
import Counter from "./Counter";
import classes from "./componentsStyle/CartClotherItem.module.css";
import Pic from "../images/clotherPic.png";

const CartClotherItem = (props) => {
	return (
		<div className={classes.oneItem}>
			<div className={classes.attributesClother}>
				<span className={classes.text}>Name</span>
				<span className={classes.text}>Price</span>
				<div className={classes.size}>
					<span className={classes.text}>Size:</span>
					<div className={classes.sizeAttr}>
						{/* Create component size square */}
						<div> XS </div>
						<div> S </div>
						<div> M </div>
						<div> L </div>
					</div>
				</div>
				<div className={classes.color}>
					<span className={classes.text}>Color:</span>
					<div className={classes.colorAttr}>
						{/* Create component color square */}

						<div> </div>
						<div> </div>
						<div> </div>
						<div> </div>
					</div>
				</div>
			</div>
			<Counter></Counter>
			<div className={classes.imgClother}>
				<img alt='qweqwe' src={Pic}></img>
			</div>
		</div>
	);
};

export default CartClotherItem;
