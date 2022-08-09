import React, { useState } from "react";
import classes from "./componentsStyle/Counter.module.css";

const Counter = function() {
	const [count, setCount] = useState(0);

	function increment() {
		setCount(count + 1);
	}

	function decrement() {
		if (count <= 0) {
			return;
		}
		setCount(count - 1);
	}

	return (
		<div className={classes.counter}>
			<button className={classes.counterBtn} onClick={increment}>
				+
			</button>
			<span>{count}</span>
			<button className={classes.counterBtn} onClick={decrement}>
				-
			</button>
		</div>
	);
};

export default Counter;
