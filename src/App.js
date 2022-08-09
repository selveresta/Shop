import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import ClotherItem from "./Components/ClotherItem";
import Clother from "./images/clotherPic.png";
import ClotherList from "./Components/ClotherList";
import "./styles/App.css";
import Counter from "./Components/Counter";
import CartClotherItem from "./Components/CartClotherItem";
import { GET_ALL_PRODUCT, GET_CATEGORY_DATA } from "./Data/Query";
import { useQuery } from "@apollo/client";

function App() {
	// const [clothers, setClothers] = useState([
	// 	{ pic: Clother, type: "", size: {}, color: {}, name: "name1", price: "100", link: "#" },
	// 	{ pic: Clother, type: "", size: {}, color: {}, name: "name2", price: "100", link: "#" },
	// 	{ pic: Clother, type: "", size: {}, color: {}, name: "name3", price: "100", link: "#" },
	// 	{ pic: Clother, type: "", size: {}, color: {}, name: "name4", price: "100", link: "#" },
	// 	{ pic: Clother, type: "", size: {}, color: {}, name: "name5", price: "100", link: "#" },
	// 	{ pic: Clother, type: "", size: {}, color: {}, name: "name6", price: "100", link: "#" },
	// ]);

	const [products, setProducts] = useState([]);
	//const { data, loading, error } = useQuery(GET_ALL_PRODUCT);
	const { data, loading, error } = useQuery(GET_CATEGORY_DATA);

	useEffect(() => {
		if (!loading) {
			setProducts(data.categories[0].products);
		}
	}, [data]);

	console.log(products);

	return (
		<div className='App'>
			{/* <Header></Header> */}
			{/* <h1 className='categoryName'>Category Name</h1> */}
			{/* <ClotherList clothers={clothers}></ClotherList> */}
			{/* <CartClotherItem></CartClotherItem> */}
			{products.map((products) => (
				<div>{products.name}</div>
			))}
		</div>
	);
}

export default App;
