
import './App.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Home from './Paginas/Home';
import Produtos from './Paginas/Produtos';
import Categorias from './Paginas/Categorias';
import NovoProduto from './Paginas/Produtos/NovoProduto';
import NovaCategoria from './Paginas/Categorias/NovaCategoria';
import EditarProduto from './Paginas/Produtos/EditarProduto';

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
          <Route exact path="produtos/editar/:id">
            <EditarProduto />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
