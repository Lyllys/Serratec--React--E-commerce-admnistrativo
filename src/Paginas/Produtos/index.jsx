import { useEffect, useState } from "react";
import http from '../../Componentes/http';
import { Link } from "react-router-dom";
import '../../App.css';
import MensagemSucesso from "../../Componentes/Mensagem/MensagemSucesso";
import MensagemErro from "../../Componentes/Mensagem/MensagemErro";

const Produtos = () => {

    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const [produtos, setProdutos] = useState([]);

    const obterProdutos = () => {
        http.get('produto/todos')
            .then(resposta => {
                setProdutos(resposta.data)
                setMensagemSucesso("Produto excluído com sucesso")
                setTimeout(() => {
                    setMensagemSucesso('')
                }, 3000);
            })
            .catch(erro => {
                console.log('Algo deu errado')
                if (erro.response.data && erro.response.data.message) {
                    setMensagemErro(erro.response.data.message)
                } else {
                    setMensagemErro('OPS... um erro não esperado.')
                }
                setTimeout(() => {
                    setMensagemErro('')
                }, 4500);
            })
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
            <div className="col-12 mensagem-sucesso">
                {mensagemSucesso && <MensagemSucesso msgSucesso={mensagemSucesso} />}
                {mensagemErro && <MensagemErro msgErro={mensagemErro} />}
            </div>
        </div>
        

    )

}

export default Produtos;