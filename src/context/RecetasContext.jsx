import { createContext, useState } from "react";

const RecetasContext = createContext();

const RecetasProvider = (props) => {
	const [recetas, guardarRecetas] = useState([]);
	const [busqueda, buscarRecetas] = useState({
		ingrediente: "",
		categoria: "",
	});

	return (
		<RecetasContext.Provider value={{ buscarRecetas, guardarRecetas }}>
			{props.children}
		</RecetasContext.Provider>
	);
};

export default RecetasProvider;
