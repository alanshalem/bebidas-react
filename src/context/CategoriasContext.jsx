// importamos la funcion createContext para crear el context
import axios from "axios";
import { createContext, useState, useEffect } from "react";
// Crear el Context
export const CategoriasContext = createContext();
// Siempre que creemos un context debemos crear un provider.
// El provider es de donde van a salir los datos del state y las funciones
const CategoriasProvider = (props) => {
	// Creamos el state del Context
	const [categorias, guardarCategorias] = useState([]);
	// Ejecutamos el llamado a la API
	useEffect(() => {
		const obtenerCategorias = async () => {
			try {
				const url =
					"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
				const categorias = await axios.get(url);
				guardarCategorias(categorias.data.drinks);
			} catch (error) {
				console.log(error);
			}
		};
		obtenerCategorias();
	}, []);
	// Retornamos el provider con el state y las funciones
	return (
		<CategoriasContext.Provider value={{ categorias, guardarCategorias }}>
			{props.children}
		</CategoriasContext.Provider>
	);
};

export default CategoriasProvider;
