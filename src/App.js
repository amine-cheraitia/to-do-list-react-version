import "../node_modules/bulma/css/bulma.min.css";
import "./App.css";
import Header from "./Component/Header/Header";
import Card from "./Component/Card/Card";
import { useState } from "react";

function App() {
	const [monState, setMonState] = useState([
		{ tache: "tache 1", txt: "random text" },
		{ tache: "tache 2", txt: "random text 2" },
		{ tache: "tache 3", txt: "random text 3" },
	]);
	const [tache, setTache] = useState();
	const [txt, setTxt] = useState();

	function creationCarte(e) {
		e.preventDefault();
		const nvTab = [...monState, { tache: tache, txt: txt }];
		setTache("");
		setTxt("");
		setMonState(nvTab);
	}

	function suppCarte(index) {
		const tab = [...monState];
		const newState = tab.filter(
			(elem) => tab.indexOf(elem) !== tab.indexOf(tab[index])
		);

		setMonState(newState);
	}
	return (
		<div>
			<Header />
			<div className="container px-3">
				<h2 className="title mt-5">Rentrez vos tâches à faire</h2>

				<form onSubmit={creationCarte}>
					<div className="field">
						<div className="control">
							<label htmlFor="tache" className="label">
								Tâche
							</label>
							<input
								value={tache}
								className="input"
								type="text"
								id="tache"
								placeholder="une tache a faire"
								onChange={(e) => setTache(e.target.value)}
							/>
						</div>
					</div>
					<div className="field">
						<div className="control">
							<label htmlFor="txt" className="label">
								Contenu de la tâche
							</label>
							<textarea
								value={txt}
								className="textarea"
								type="text"
								id="txt"
								placeholder="une tache a faire"
								onChange={(e) => setTxt(e.target.value)}
							></textarea>
						</div>
					</div>
					<div className="control">
						<button type="submit" className="button is-link">
							Créer une tâche
						</button>
					</div>
				</form>

				{monState.map((todo, index) => {
					return (
						<Card
							tache={todo.tache}
							index={index}
							txt={todo.txt}
							deleteCarte={suppCarte}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
