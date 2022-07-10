import React from "react";

export default function Card() {
	return (
		<div className="card has-background-info my-4">
			<div className="card-content">
				<div className="content">
					<h3 className="px-4">Tâche :</h3>
					<p className="is-size-4 px-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
						id.
					</p>
					<button className="delete is-large btn-top">X</button>
				</div>
			</div>
		</div>
	);
}
