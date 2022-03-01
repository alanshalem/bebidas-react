// Importamos useContext para poder hacer uso del context que creamos
import { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
	// Obtenemos el context del provider que creamos
	const { categorias, guardarCategorias } = useContext(CategoriasContext);
	const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);
	// Logueamos el state del context
	// console.log(categorias);
	// console.log(buscarRecetas);

	// State del componente
	const [busqueda, guardarBusqueda] = useState({
		nombre: "",
		categoria: "",
	});

	// Extraer de busqueda
	const { nombre, categoria } = busqueda;

	// Funcion para leer los contenidos de los inputs
	const obtenerDatosReceta = (e) => {
		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form
			className='col-12'
			onSubmit={(e) => {
				e.preventDefault();
				buscarRecetas(busqueda);
				guardarConsultar(true);
			}}
		>
			<fieldset>
				<legend>Busca bebidas por su Categoría o Ingrediente</legend>
			</fieldset>
			<div className='row mt-4'>
				<div className='col-md-4'>
					<input
						name='nombre'
						className='form-control'
						type='text'
						placeholder='Buscar por Ingrediente'
						onChange={obtenerDatosReceta}
					/>
				</div>
				<div className='col-md-4'>
					<select
						className='form-control'
						name='categoria'
						onChange={obtenerDatosReceta}
					>
						<option value=''>-- Selecciona Categoría --</option>
						{categorias.map((categoria) => (
							<option
								key={categoria.strCategory}
								value={categoria.strCategory}
							>
								{categoria.strCategory}
							</option>
						))}
					</select>
				</div>
				<div className='col-md-4'>
					<input
						type='submit'
						className='btn btn-block btn-primary'
						value='Buscar Bebidas'
					/>
				</div>
			</div>
		</form>
	);
};

export default Formulario;
