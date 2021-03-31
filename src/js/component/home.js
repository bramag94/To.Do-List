import React, { useState } from "react";

//create your first component
export function Home() {
	const [tareas, setTareas] = useState("");
	const [lista, setLista] = useState([]);
	return (
		<div className="container">
			<h1 className="display-3 text text-center text-muted font-weight-light">
				TO DO LIST{" "}
			</h1>
			<h6>
				<strong>Instrucciones: </strong>
				Agregue sus tareas en la caja correspondiente y presione Enter.
				En caso de error, de doble click sobre la tarea para eliminarla.
			</h6>

			<div className="input-group input-group-sm mb-3">
				<div className="input-group-prepend w-100">
					<input
						type="text"
						className="form-control"
						aria-label="Sizing example input"
						aria-describedby="inputGroup-sizing-sm"
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
					/>{" "}
				</div>
			</div>

			<ul className="list-group">
				{lista.map((item, index) => {
					return (
						<li
							className="list-group-item font-weight-light"
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
			</ul>
			<p className="text-muted card pl-1">
				{lista.length} Tareas restantes
			</p>
		</div>
	);
}
