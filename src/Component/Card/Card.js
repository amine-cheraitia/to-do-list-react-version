import React from "react";

export default function Card({ tache, txt, deleteCarte, index }) {
	return (
		<div className="card has-background-info my-4">
			<div className="card-content">
				<div className="content">
					<h3 className="px-4">{tache} :</h3>
					<p className="is-size-4 px-4">{txt}</p>
					<button
						className="delete is-large btn-top"
						onClick={() => deleteCarte(index)}
					>
						X
					</button>
				</div>
			</div>
		</div>
	);
}
