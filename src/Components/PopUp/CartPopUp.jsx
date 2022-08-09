import React from "react";
import Popup from "reactjs-popup";
import EmptyCart from "../../images/EmptyCart.png";
import CartClotherItem from "../CartClotherItem";
import classes from "./stylesPopUp/CartPopUp.module.css";

const CartPopUp = () => {
	return (
		<Popup
			trigger={
				<button className={classes.cartBtn}>
					{" "}
					<img id={classes.Cart} alt='cart' src={EmptyCart}></img>
				</button>
			}
			position='bottom right'
			closeOnDocumentClick>
			<div className={classes.mainBlockCart}>
				<div className={classes.mainContentCart}>
					<p>
						<strong>My Bag</strong> <span>, 3 items</span>
					</p>
					<CartClotherItem></CartClotherItem>
					<CartClotherItem></CartClotherItem>
					<CartClotherItem></CartClotherItem>

					<div>
						<span>Total </span>
						<span> 200$</span>
					</div>
				</div>
				<div className='buttonsCart'>
					<button>asdasd</button>
					<button>sadsad</button>
				</div>
			</div>
		</Popup>
	);
};

export default CartPopUp;
