import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import Cart from "./pages/Cart";
import ListProduct from "./pages/ListProduct";
import "./styles/App.css";

const defaultState = {
	currency: "$",
	cartProducts: [],
};

function cartCurrenctReducer(state = defaultState, action) {
	switch (action.type) {
		case "SWITCH_CURRENCY":
			return { ...state, currency: action.payload };
		case "ADD_TO_CART":
			return { ...state, cartProducts: [...state.cartProducts, action.payload] };
		default:
			return state;
	}
}

let store = createStore(cartCurrenctReducer);

function App() {
	console.log(defaultState.cartProducts);
	return (
		<div>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/cart' element={<Cart />} />
						<Route path='/' element={<ListProduct />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
