import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import EmptyCart from "../../images/EmptyCart.png";
import CartClotherItem from "../CartClotherItem";
import classes from "./stylesPopUp/CartPopUp.module.css";

const CartPopUp = ({ showOverlay, cartProducts, currency }) => {
	const [totalPrice, setTotalPrice] = useState("");
	const [dataTransfer, setDataTransfer] = useState({});
	let total = 0;

	const determinePrice = () => {
		let i = 0;

		if (cartProducts.length > 0) {
			cartProducts.map((product) => {
				product.prices.map((price) => {
					if (price.currency.symbol === currency) {
						total += price.amount;
					}
				});
			});
		}
	};

	useEffect(() => {
		determinePrice();
		setTotalPrice(total);
		setDataTransfer({ cartProducts: cartProducts, currency: currency });
	}, [currency, cartProducts]);

	const linkStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textDecoration: "none",
		width: "140px",
		height: "43px",
		margin: "15px",
		fontWeight: "bold",
		cursor: "pointer",
		border: "1px black solid",
		color: "black",
		backgroundColor: "transparent",
	};

	return (
		<Popup
			trigger={
				<button className={classes.cartBtn}>
					{cartProducts.length > 0 ? (
						<div className={classes.counterItems}>{cartProducts.length}</div>
					) : (
						<div></div>
					)}
					<img id={classes.Cart} alt='cart' src={EmptyCart}></img>
				</button>
			}
			position='bottom right'
			closeOnDocumentClick
			onOpen={showOverlay}
			onClose={showOverlay}>
			<div className={classes.mainBlockCart}>
				<div className={classes.mainContentCart}>
					<p>
						<strong>My Bag</strong> <span>, {cartProducts.length}</span>
					</p>
					{cartProducts.map((product, index) => (
						<CartClotherItem key={index} product={product} currency={currency}></CartClotherItem>
					))}

					<div className={classes.total}>
						<span>Total </span>
						<span>{totalPrice + currency}</span>
					</div>
				</div>
				<div className={classes.buttonsCart}>
					<Link style={linkStyle} to='/cart' state={dataTransfer}>
						VIEW BAG
					</Link>
					{/* <button id={classes.viewBag}>
						
					</button> */}
					<button>CHECK OUT</button>
				</div>
			</div>
		</Popup>
	);
};

export default CartPopUp;
