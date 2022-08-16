import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import ListProduct from "./pages/ListProduct";
import "./styles/App.css";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/cart' element={<Cart />} />
					<Route path='/' element={<ListProduct />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
