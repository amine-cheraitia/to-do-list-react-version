import React from "react";
import "../../../node_modules/bulma/css/bulma.min.css";

export default function Header() {
	return (
		<header
			className="has-text-centered has-background-info"
			role="navigation"
			aria-label="main navigation"
			style={{ textAlign: "center" }}
		>
			<h2 className="is-size-4 has-text-white" style={{ lineHeight: "52px" }}>
				To Do Liste App
			</h2>
		</header>
	);
}
