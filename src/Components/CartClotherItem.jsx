import React from "react";
import Counter from "./Counter";
import classes from "./componentsStyle/CartClotherItem.module.css";
import Pic from "../images/clotherPic.png";

const CartClotherItem = () => {
	return (
		<div className={classes.oneItem}>
			<div className={classes.attributesClother}>
				<p className={classes.text}>Name</p>
				<p className={classes.text}>Price</p>
				<div className={classes.size}>
					<div className={classes.text}>Size:</div>
					<div className={classes.sizeAttr}>
						<div> XS </div>
						<div> S </div>
						<div> M </div>
						<div> L </div>
					</div>
				</div>
				<div className={classes.color}>
					<div className={classes.text}>Color:</div>
					<div className={classes.colorAttr}>
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
