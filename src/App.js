import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import ClotherItem from "./Components/ClotherItem";
import Clother from "./images/clotherPic.png";
import ClotherList from "./Components/ClotherList";
import "./styles/App.css";
import Counter from "./Components/Counter";
import CartClotherItem from "./Components/CartClotherItem";
import { GET_ALL_PRODUCT, GET_CATEGORY_DATA, GET_CURRENCIES, GET_ID_PRODUCTS } from "./Data/Query";
import { useQuery } from "@apollo/client";

function App() {
	const [clothers, setClothers] = useState([
		{ pic: Clother, type: "", size: {}, color: {}, name: "name1", price: "100", link: "#" },
		{ pic: Clother, type: "", size: {}, color: {}, name: "name2", price: "100", link: "#" },
		{ pic: Clother, type: "", size: {}, color: {}, name: "name3", price: "100", link: "#" },
		{ pic: Clother, type: "", size: {}, color: {}, name: "name4", price: "100", link: "#" },
		{ pic: Clother, type: "", size: {}, color: {}, name: "name5", price: "100", link: "#" },
		{ pic: Clother, type: "", size: {}, color: {}, name: "name6", price: "100", link: "#" },
	]);

	const [products, setProducts] = useState([]);

	// const { data, loading, error } = useQuery(GET_ALL_PRODUCT);
	// const { data, loading, error } = useQuery(GET_ID_PRODUCTS);

	// useEffect(() => {
	// 	if (!loading) {
	// 		setProducts(data.categories[0].products);
	// 	}
	// }, [data]);

	// console.log(products);
	// console.log(currencies);

	return (
		<div className='App'>
			<Header></Header>
			<h1 className='categoryName'>Category Name</h1>
			{/* <ClotherList clothers={clothers}></ClotherList> */}
			{/* <ClotherList clothers={products}></ClotherList> */}
		</div>
	);
}

export default App;
