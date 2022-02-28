import Formulario from "./components/Formulario";
import Header from "./components/Header";
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
function App() {
	return (
		// Wrapper del context
		<CategoriasProvider>
			<RecetasProvider>
				<Header />
				<div className='container mt-5'>
					<div className='row'>
						<Formulario />
					</div>
				</div>
			</RecetasProvider>
		</CategoriasProvider>
	);
}

export default App;
