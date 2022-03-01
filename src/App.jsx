import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaRecetas from "./components/ListaRecetas";
import CategoriasProvider from "./context/CategoriasContext";
import ModalProvider from "./context/ModalContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
	return (
		// Wrapper del context
		<CategoriasProvider>
			<ModalProvider>
				<RecetasProvider>
					<Header />
					<div className='container mt-5'>
						<div className='row'>
							<Formulario />
						</div>
						<ListaRecetas />
					</div>
				</RecetasProvider>
			</ModalProvider>
		</CategoriasProvider>
	);
}

export default App;
