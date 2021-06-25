import { Link } from "react-router-dom";
import './estilos.css'

const Navbar = () => {
  return (
    <nav>
      <ul className="nav justify-content-center navbar-menu">
        <li className="nav-item">
          <Link className="nav-link nav-link-menu" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-link-menu" aria-current="page" to="/produtos">Produtos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-link-menu" to="/categorias">Categorias</Link>
        </li>
      </ul>
    </nav>)
      
}

export default Navbar;