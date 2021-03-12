import React, { useState } from "react";

//create your first component
export function Home() {
	const [tareas, setTareas] = useState("");
	const [lista, setLista] = useState([]);
	return (
		<div className="text-center mt-5">
			<h1>TO DO LIST </h1>

			<input
				type="text"
				placeholder="Ingrese sus datos"
				onChange={e => setTareas(e.target.value)}
				value={tareas}
				onKeyPress={e => {
					if (e.key == "Enter") {
						setLista(lista.concat(tareas));
						setTareas("");
						console.log({ lista });
					}
				}}
			/>
			{lista.map((item, index) => {
				return (
					<li
						onDoubleClick={() => {
							setLista(
								lista.filter(
									(itemf, indexf) => indexf !== index
								)
							);
						}}
						key={index}>
						{" "}
						{item}
					</li>
				);
			})}
		</div>
	);
}
