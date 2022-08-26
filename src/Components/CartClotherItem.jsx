import React, { useState } from "react";
import Counter from "./Counter";
import classes from "./componentsStyle/CartClotherItem.module.css";
import Pic from "../images/clotherPic.png";
import { useEffect } from "react";

const CartClotherItem = ({ product, currency }) => {
	const [index, setIndex] = useState(0);
	const determineCurrency = () => {
		let i = 0;
		product.prices.map((price) => {
			if (price.currency.symbol === currency) {
				setIndex(i);
			}
			i++;
		});
	};

	useEffect(() => {
		determineCurrency();
		console.log(index);
	}, [currency]);

	return (
		<div className={classes.oneItem}>
			<div className={classes.attributesClother}>
				<span className={classes.text}>{product.name}</span>
				<span className={classes.text}>
					{product.prices[index].currency.symbol}
					{product.prices[index].amount}
				</span>
				{product.attributes[0] !== undefined ? (
					<div>
						<div className={classes.text}>{product.attributes[0].name}</div>
						<div className={classes.attributeList}>
							{product.attributes[0].items.map((size) => (
								<button
									style={{ backgroundColor: size.value }}
									className={classes.oneAttr}
									key={size.id}>
									{size.value.includes("#") ? "" : size.value}
								</button>
							))}
						</div>
					</div>
				) : (
					<div></div>
				)}
				{product.attributes[1] !== undefined ? (
					<div>
						<div className={classes.text}>{product.attributes[1].name}</div>
						<div className={classes.attributeList}>
							{product.attributes[1].items.map((color) => (
								<button
									style={{ backgroundColor: color.value }}
									className={classes.oneAttr}
									key={color.id}></button>
							))}
						</div>
					</div>
				) : (
					<div></div>
				)}
			</div>
			<Counter></Counter>
			<div className={classes.imgClother}>
				<img alt='qweqwe' src={product.gallery[0]}></img>
			</div>
		</div>
	);
};

export default CartClotherItem;
