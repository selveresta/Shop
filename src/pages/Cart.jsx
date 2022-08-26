import React, { useEffect, useState } from "react";
import classes from "../Components/componentsStyle/Cart.module.css";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Product from "../Components/Product";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCT, GET_CATEGORIES_NAMES, GET_CATEGORY_DATA, GET_CURRENCIES } from "../Data/Query";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
	const dispacth = useDispatch();
	const cartProducts = useSelector((state) => state.cartProducts);

	const location = useLocation();
	const data = location.state;
	const products = data.cartProducts;
	const currency = data.currency;

	const getCategories = useQuery(GET_CATEGORIES_NAMES);
	const getCurrencies = useQuery(GET_CURRENCIES);
	const getProducts = useQuery(GET_CATEGORY_DATA);
	const getFullProducts = useQuery(GET_ALL_PRODUCT);

	const [categories, setCategories] = useState([]);
	const [currentCategory, setCurrentCategory] = useState("ALL");
	const [currentCurrency, setCurrentCurrency] = useState("$");
	const [currencies, setCurrencies] = useState([]);
	const [allArraysProducts, setAllArraysProducts] = useState([]);
	const [currentCategoryProducts, setCurrentCategoryProducts] = useState([]);
	const [fullProducts, setFullProducts] = useState([]);
	const [idChoosenProduct, setIdChoosenProduct] = useState("");

	useEffect(() => {
		if (!getCategories.loading) {
			setCategories(getCategories.data.categories);
		}
	}, [getCategories.data]);

	useEffect(() => {
		if (!getCurrencies.loading) {
			setCurrencies(getCurrencies.data.currencies);
		}
	}, [getCurrencies.data]);

	useEffect(() => {
		if (!getProducts.loading) {
			setAllArraysProducts(getProducts.data.categories);
		}
	}, [getProducts.data]);

	useEffect(() => {
		if (!getFullProducts.loading) {
			setFullProducts(getFullProducts.data.categories);
		}
	}, [getFullProducts.data]);

	const newCategory = (category) => {
		setCurrentCategory(category);
	};

	const newCurrentCurrency = (currency) => {
		setCurrentCurrency(currency);
	};

	console.log(data);
	return (
		<div>
			{/* <Header
				categories={categories}
				currencies={currencies}
				cartProducts={cartProducts}
				currency={currency}
				newCurrentCurrency={newCurrentCurrency}
				newCategory={newCategory}></Header> */}
			<div className={classes.main}>
				<div className={classes.CART}>CART</div>
				<hr />
				{products.map((product) => (
					<Product product={product} currency={currency}></Product>
				))}
				<div>
					<div>TAX 21%:</div>
					<div>QUANTITY:</div>
					<div>TOTAL:</div>
					<div>
						{" "}
						<button>ORDER</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
