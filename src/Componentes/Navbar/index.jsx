import { Link } from "react-router-dom";
import './estilos.css'

const Navbar = () => {
  return (
    <nav>
      <ul className="nav justify-content-center navbar-menu">
        <li class="nav-item">
          <Link class="nav-link nav-link-menu" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-menu" aria-current="page" to="/produtos">Produtos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-menu" to="/categorias">Categorias</Link>
        </li>
      </ul>
    </nav>)
      
}

export default Navbar;