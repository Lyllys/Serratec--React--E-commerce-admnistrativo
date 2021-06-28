
import './App.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Home from './Paginas/Home';
import Produtos from './Paginas/Produtos';
import Categorias from './Paginas/Categorias';
import NovoProduto from './Paginas/Produtos/NovoProduto';
import NovaCategoria from './Paginas/Categorias/NovaCategoria';
import EditarProduto from './Paginas/Produtos/EditarProduto';
import Pagina404 from './Paginas/Pagina404/Pagina404';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/produtos">
          <Produtos />
        </Route>
        <Route exact path="/categorias">
          <Categorias />
        </Route>
        <Route exact path="/produtos/cadastrar">
            <NovoProduto />
          </Route>
          <Route exact path="/categorias/cadastrar">
            <NovaCategoria />
          </Route>
          <Route path="/produtos/editar/:nomedoproduto">
            <EditarProduto />
          </Route>
          <Route>
        <Pagina404 />
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
