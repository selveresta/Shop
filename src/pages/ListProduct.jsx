import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ClotherList from "../Components/ClotherList";
import "../styles/App.css";
// import CartClotherItem from "./Components/CartClotherItem";
import { GET_ALL_PRODUCT, GET_CATEGORIES_NAMES, GET_CATEGORY_DATA, GET_CURRENCIES } from "../Data/Query";
import { useQuery } from "@apollo/client";
import PdpProduct from "../Components/PdpProduct";
import classNames from "classnames";
import pdpClasses from "../Components/componentsStyle/PdpProduct.module.css";

function ListProduct() {
	//---------------------------------------------------------
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
	const [choosenProduct, setChoosenProduct] = useState();
	const [activeModule, setActiveModule] = useState(classNames(pdpClasses.mainBlock));
	const [cartItems, setCartItems] = useState([]);

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
		allArraysProducts.forEach((element) => {
			if (element.name.toLowerCase() === currentCategory.toLowerCase()) {
				setCurrentCategoryProducts(element.products);
			}
		});
	}, [currentCategory, allArraysProducts]);

	useEffect(() => {
		if (!getFullProducts.loading) {
			setFullProducts(getFullProducts.data.categories);
		}
	}, [getFullProducts.data]);

	useEffect(() => {
		if (!getProducts.loading) {
			fullProducts[0].products.forEach((element) => {
				if (element.id === idChoosenProduct) {
					setChoosenProduct(element);
				}
			});
		}
	}, [idChoosenProduct]);

	const newCurrentCurrency = (symbol) => {
		setCurrentCurrency(symbol);
	};

	const newCategory = (category) => {
		setCurrentCategory(category);
	};

	function openModal() {
		setActiveModule(classNames(pdpClasses.mainBlock, pdpClasses.active));
	}

	function closeModal() {
		setActiveModule(classNames(pdpClasses.mainBlock));
	}

	function addToCart(newItem) {
		setCartItems([...cartItems, newItem]);
		console.log(cartItems);
	}

	return (
		<div className='App'>
			<Header
				categories={categories}
				currencies={currencies}
				cartProducts={cartItems}
				currentCurrency={currentCurrency}
				newCurrentCurrency={newCurrentCurrency}
				newCategory={newCategory}
				closeModal={closeModal}></Header>
			<PdpProduct
				product={choosenProduct}
				openModal={openModal}
				activeModule={activeModule}
				setActiveModule={setActiveModule}
				currentCurrency={currentCurrency}
				addToCart={addToCart}></PdpProduct>
			<ClotherList
				currentCategory={currentCategory}
				openPdp={openModal}
				products={currentCategoryProducts}
				currentCurrency={currentCurrency}
				set={setIdChoosenProduct}></ClotherList>
		</div>
	);
}

export default ListProduct;
