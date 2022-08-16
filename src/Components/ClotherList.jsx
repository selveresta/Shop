import React from "react";
import CategotyName from "./CategoryName";
import ClotherItem from "./ClotherItem";
import classes from "./componentsStyle/ClotherList.module.css";

function ClotherList({ products, currentCurrency, openPdp, currentCategory, set }) {
	return (
		<div>
			<CategotyName currentCategory={currentCategory}></CategotyName>
			<div className={classes.mainClotherItems}>
				{products.map((clother) => (
					<ClotherItem
						openPdp={openPdp}
						key={clother.id}
						clother={clother}
						currentCurrency={currentCurrency}
						set={set}></ClotherItem>
				))}
			</div>
		</div>
	);
}

export default ClotherList;
