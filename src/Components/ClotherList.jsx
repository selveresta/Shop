import React from "react";
import ClotherItem from "./ClotherItem";
import classes from "./componentsStyle/ClotherList.module.css";

function ClotherList({ clothers }) {
	return (
		<div className={classes.mainClotherItems}>
			{clothers.map((clother) => (
				<ClotherItem clother={clother}></ClotherItem>
			))}
		</div>
	);
}

export default ClotherList;
