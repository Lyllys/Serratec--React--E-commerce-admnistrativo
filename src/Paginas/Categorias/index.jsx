import { useEffect, useState } from "react";
import http from '../../Componentes/http';
import { Link } from "react-router-dom";
import '../../App.css';

const Categorias = () => {
    const [categorias, setCategorias] = useState([]);

    const obterCategorias = () => {
        http.get('categoria/todas')
            .then(resposta => setCategorias(resposta.data))
            .catch(erro => console.log(erro))
    };

    useEffect(() => {
        obterCategorias()
    }, []);

    const excluir = (categoria) => {
        http.delete('categoria/' + categoria.id)
          .then(() => obterCategorias())
      }

    return (
        <div>
            <h1 className="titulo-produto-categoria">Categorias</h1>
            <div className="botao-cadastrar">
            <Link to="/categorias/cadastrar" type="button" className="btn btn-outline-primary">Cadastrar nova categoria</Link>
            </div>
           
            <table className="table table-striped tabela-produtos-categorias">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                {categorias.map(categoria => <tr key={categoria.id}>
            <td>{categoria.id}</td>
            <td>{categoria.nome}</td>
            <td>{categoria.descricao}</td>
            <td>
              <Link className="btn btn-sm btn-outline-info" to={`/categoria/${categoria.id}`}>editar</Link>
            </td>
            <td>
            <button type="button" className="ml-2 btn btn-sm btn-outline-danger" onClick={() => { excluir(categoria) }}>excluir</button>
            </td>
          </tr>)}
                </tbody>
            </table>

        </div>

    )

}

export default Categorias;