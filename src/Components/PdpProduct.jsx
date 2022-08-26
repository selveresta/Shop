import React from "react";
import classes from "./componentsStyle/PdpProduct.module.css";
import { useState } from "react";
import { useEffect } from "react";

function PdpProduct({ product, addToCart, activeModule, currentCurrency }) {
	const [ariaHidden, setAraiHidden] = useState("true");
	//console.log(product);

	const [currentImage, setCurrentImage] = useState();
	const [focusImage, setFocusImage] = useState();
	const [currentAttributes, setCurrentAttributes] = useState([]);
	const [price, setPrice] = useState("");

	useEffect(() => {
		if (activeModule !== classes.mainBlock) {
			setAraiHidden("false");
		} else setAraiHidden("true");
	}, [activeModule]);

	useEffect(() => {
		if (product !== undefined) {
			setCurrentImage(product.gallery[0]);
			product.prices.map((price) => {
				if (currentCurrency == price.currency.symbol) {
					setPrice(price.currency.symbol + price.amount);
				}
			});

			const parser = new DOMParser();
			const a = parser.parseFromString(product.description, "text/html");
			let descriptionP = document.querySelector("p");
			descriptionP.innerHTML = "";
			descriptionP.appendChild(a.body.firstChild);
		}
	}, [product, currentCurrency]);

	if (product === undefined) {
		return;
	}

	function changeImage(e) {
		setCurrentImage(e.target.src);
	}

	return (
		<div>
			<div className={activeModule}>
				<div className={classes.imgsProduct}>
					{/* {product.gallery.length > 1 ? <button className={classes.arrow}>&uarr; </button> : <div></div>} */}
					{product.gallery.map((img, index) => (
						<img onClick={changeImage} key={index + 1} src={img}></img>
					))}
					{/* {product.gallery.length > 1 ? <button className={classes.arrow}>&darr; </button> : <div></div>} */}
				</div>
				<div className={classes.mainImg}>
					<img src={currentImage}></img>
				</div>
				<div className={classes.attributes}>
					<div className={classes.brandName}>{product.brand}</div>
					<div className={classes.productName}>{product.name}</div>

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
										key={color.id}>
										{color.value.includes("#") ? "" : color.value}
									</button>
								))}
							</div>
						</div>
					) : (
						<div></div>
					)}
					<div className={classes.text}>PRICE:</div>
					<div className={classes.price}>{price}</div>
					<button
						onClick={() => {
							addToCart(product);
						}}
						className={classes.addBtn}>
						ADD TO CART
					</button>
					<div id='description' className={classes.description}>
						<p></p>
					</div>
				</div>
			</div>
			<div className={classes.overlay} aria-hidden={ariaHidden}></div>
		</div>
	);
}

export default PdpProduct;
