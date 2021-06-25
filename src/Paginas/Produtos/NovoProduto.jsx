import '../../App.css';
import { useState, useEffect } from 'react';
import http from '../../Componentes/http';
import MensagemSucesso from "../../Componentes/Mensagem/MensagemSucesso";
import MensagemErro from "../../Componentes/Mensagem/MensagemErro";

const NovoProduto = () => {

    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [categoriaId, setCategoriaId] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [url, setUrl] = useState('');


    useEffect(() => {
        http.get('/categoria/todas')
            .then(resposta => setCategorias(resposta.data))
    }, [])


    const salvar = (evento) => {
        evento.preventDefault();
        const produto = {
            nome: nome,
            codigo: codigo,
            descricao: descricao,
            preco: preco,
            quantidadeEstoque: quantidade,
            categoria: {
                id: categoriaId
            },
            url: url
        }

        console.log(produto)
        http.post('produto', produto)
        .then(response => {
            console.log(response.data)
            setMensagemSucesso("Produto cadastrado com sucesso")
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
    }


    return (
        <form onSubmit={salvar} className="row g-3 formulario-produto-categoria">
            <div className="col-md-6">
                <label className="form-label">Nome</label>
                <input value={nome} onChange={(evento) => setNome(evento.target.value)} className="form-control" />
            </div>
            <div className="col-md-6">
                <label className="form-label">Código</label>
                <input value={codigo} onChange={(evento) => setCodigo(evento.target.value)} className="form-control" />
            </div>
            <div className="col-12">
                <label className="form-label">Descrição</label>
                <input value={descricao} onChange={(evento) => setDescricao(evento.target.value)} className="form-control" />
            </div>
            <div className="col-md-4">
                <label className="form-label">Preço</label>
                <input value={preco} onChange={(evento) => setPreco(evento.target.value)} type="number" className="form-control" />
            </div>
            <div className="col-md-4">
                <label className="form-label">Quantidade</label>
                <input value={quantidade} onChange={(evento) => setQuantidade(evento.target.value)} type="text" className="form-control" />
            </div>
            <div className="col-md-4">
                <label  className="form-label">Categoria</label>
                <select value={categoriaId} onChange={(evento) => setCategoriaId(evento.target.value)} className="form-select">
                <option value=""></option>
                {categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>)}
                </select>
            </div>
            <div className="col-md-12">
                <label className="form-label">Imagem</label>
                <input onChange={(evento) => setUrl(evento.target.value)} type="text" value={url} className="form-control" id="formFile" />
            </div>
            <div className="col-12 botao-cadastrar-novo">
                <button type="submit" className="btn btn-primary botao-cadastro">Cadastar</button>
            </div>
            <div className="col-12 mensagem-sucesso">
            { mensagemSucesso && <MensagemSucesso msgSucesso={mensagemSucesso} /> }
            { mensagemErro && <MensagemErro msgErro={mensagemErro} /> }

            </div>
        </form>
    )
}

export default NovoProduto;