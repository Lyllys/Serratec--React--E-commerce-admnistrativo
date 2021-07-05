import { useState } from "react";
import http from '../../Componentes/http';
import MensagemSucesso from "../../Componentes/Mensagem/MensagemSucesso";
import MensagemErro from "../../Componentes/Mensagem/MensagemErro";

const NovaCategoria = () => {

    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');


    const salvar = (evento) => {
        evento.preventDefault()
        const categoria = {
            nome: nome,
            descricao: descricao
        }
        http.post('categoria', categoria)
            .then(response => {
                console.log(response.data)
                setMensagemSucesso("Categoria cadastrada com sucesso")
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
            <div className="col-md-12">
                <label className="form-label">Nome</label>
                <input value={nome} onChange={(evento) => setNome(evento.target.value)} required className="form-control" />
            </div>
            <div className="col-12">
                <label className="form-label">Descrição</label>
                <input value={descricao} onChange={(evento) => setDescricao(evento.target.value)} required className="form-control" />
            </div>
            <div className="col-12 botao-cadastrar-novo">
                <button type="submit" className="btn btn-primary botao-cadastro">Cadastrar</button>
            </div>
            <div className="col-12 mensagem-sucesso">
                {mensagemSucesso && <MensagemSucesso msgSucesso={mensagemSucesso} />}
                {mensagemErro && <MensagemErro msgErro={mensagemErro} />}
            </div>
        </form>
    )
}

export default NovaCategoria;