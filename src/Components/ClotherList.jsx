import React from "react";
import ClotherItem from "./ClotherItem";
import classes from "./componentsStyle/ClotherList.module.css";

function ClotherList({ products, currentCurrency }) {
	return (
		<div className={classes.mainClotherItems}>
			{products.map((clother) => (
				<ClotherItem key={clother.id} clother={clother} currentCurrency={currentCurrency}></ClotherItem>
			))}
		</div>
	);
}

export default ClotherList;
