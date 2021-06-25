import { useEffect, useState } from "react";
import http from '../../Componentes/http';
import { Link } from "react-router-dom";
import '../../App.css';

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);

    const obterProdutos = () => {
        http.get('produto/todos')
            .then(resposta => setProdutos(resposta.data))
            .catch(erro => console.log(erro))
    };

    useEffect(() => {
        obterProdutos()
    }, []);

    const excluir = (produto) => {
        http.delete('produto/' + produto.id)
          .then(() => obterProdutos())
      }

    return (
        <div>
            <h1 className="titulo-produto-categoria">Produtos</h1>
            <div className="botao-cadastrar">
            <Link to="/produtos/cadastrar" type="button" className="btn btn-outline-primary">Cadastrar novo produto</Link>
            </div>
           
            <table className="table table-striped tabela-produtos-categorias">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                {produtos.map(produto => <tr key={produto.id}>
            <td>{produto.codigo}</td>
            <td>{produto.nome}</td>
            <td>R${produto.preco}</td>
            <td>{produto.quantidadeEstoque}</td>
            <td>{produto.descricao}</td>
            {/* <td>{produto.categoria}</td> não funciona */}
            <td>
              <Link className="btn btn-sm btn-outline-info" to={`/produtos/editar/${produto.nome}`}>editar</Link>
            </td>
            <td>
              <button type="button" className="ml-2 btn btn-sm btn-outline-danger" onClick={() => { excluir(produto) }}>excluir</button>
            </td>
          </tr>)}
                </tbody>
            </table>

        </div>

    )

}

export default Produtos;