import './estilos.css'
import naoencontrada from '../../imagens/404.png';

const Pagina404 = () => {
    return <div className="imagem-404">
        <img className="img-fluid " src={naoencontrada} alt="pagina não encontrada" />
    </div>
}

export default Pagina404;