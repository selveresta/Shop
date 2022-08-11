import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import ClotherItem from "./Components/ClotherItem";
import Clother from "./images/clotherPic.png";
import ClotherList from "./Components/ClotherList";
import "./styles/App.css";
import Counter from "./Components/Counter";
import CartClotherItem from "./Components/CartClotherItem";
import {
	GET_ALL_PRODUCT,
	GET_CATEGORIES_NAMES,
	GET_CATEGORY_DATA,
	GET_CURRENCIES,
	GET_ID_PRODUCTS,
} from "./Data/Query";
import { useQuery } from "@apollo/client";
import CategoryName from "./Components/CategoryName";

function App() {
	//---------------------------------------------------------
	const getCategories = useQuery(GET_CATEGORIES_NAMES);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (!getCategories.loading) {
			setCategories(getCategories.data.categories);
		}
	}, [getCategories.data]);

	const [currentCategory, setCurrentCategory] = useState("ALL");

	const newCategory = (category) => {
		setCurrentCategory(category);
	};

	//---------------------------------------------------------

	const getCurrencies = useQuery(GET_CURRENCIES);
	const [currencies, setCurrencies] = useState([]);

	useEffect(() => {
		if (!getCurrencies.loading) {
			setCurrencies(getCurrencies.data.currencies);
		}
	}, [getCurrencies.data]);

	const [currentCurrency, setCurrentCurrency] = useState("$");

	const newCurrentCurrency = (symbol) => {
		setCurrentCurrency(symbol);
	};
	//---------------------------------------------------------

	const getProducts = useQuery(GET_CATEGORY_DATA);
	const [allArraysProducts, setAllArraysProducts] = useState([]);

	useEffect(() => {
		if (!getProducts.loading) {
			setAllArraysProducts(getProducts.data.categories);
		}
	}, [getProducts.data]);

	const [currentCategoryProducts, setCurrentCategoryProducts] = useState([]);

	useEffect(() => {
		allArraysProducts.forEach((element) => {
			if (element.name.toLowerCase() == currentCategory.toLowerCase()) {
				setCurrentCategoryProducts(element.products);
			}
		});
	}, [currentCategory, allArraysProducts]);

	// const getFullProducts = useQuery(GET_ALL_PRODUCT);

	return (
		<div className='App'>
			<Header
				categories={categories}
				currencies={currencies}
				currentCurrency={currentCurrency}
				newCurrentCurrency={newCurrentCurrency}
				newCategory={newCategory}></Header>
			<CategoryName currentCategory={currentCategory}></CategoryName>
			<ClotherList products={currentCategoryProducts} currentCurrency={currentCurrency}></ClotherList>
			{/* <CartClotherItem></CartClotherItem> */}
		</div>
	);
}

export default App;
