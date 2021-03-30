import React, { useState } from "react";

//create your first component
export function Home() {
	const [tareas, setTareas] = useState("");
	const [lista, setLista] = useState([]);
	return (
		<div className="bg-dark">
			<div
				className="card text-center mt-5 bg-dark"
				style={{ width: "18rem;" }}>
				<div className="card body">
					<h1 className="card-title">TO DO LIST </h1>

					<h6 className="card-subtitle mb-2 text-muted">
						<strong>Instucciones: </strong>
						Agregue sus tareas en la caja correspondiente y presione
						Enter. En caso de error, de doble click sobre la tarea
						para eliminarla.
					</h6>

					<ul className="list-group list-group-flush">
						<il>
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
							/>{" "}
						</il>

						{lista.map((item, index) => {
							return (
								<li
									onDoubleClick={() => {
										setLista(
											lista.filter(
												(itemf, indexf) =>
													indexf !== index
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
				</div>
			</div>
		</div>
	);
}
