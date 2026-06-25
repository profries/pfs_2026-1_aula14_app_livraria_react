import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useParams } from 'react-router';
import LivroApiService from "../service/LivroApiService";

export default function FormEditLivros(){
    const { id } = useParams();
    const idNumerico = Number(id)
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState(0);

    useEffect(() => {
        LivroApiService.buscarPorId(idNumerico).then(livro => {
            console.log("Livro",livro);
            setTitulo(livro.titulo);
            setPreco(parseInt(livro.preco));       
        })
    }, [])

    const editarLivro = (event:  FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        LivroApiService.atualizar(idNumerico, {
            titulo: titulo,
            imagem:"pequenoprincipe.jpg", 
            preco: preco
        }).then(livro => {
                alert("Livro atualizado com sucesso!")
                console.log("Livro",livro);
        })            

    } 
    const voltar = () => {
        navigate(-1);
    }
    return (
        <div className="w3-container w3-padding-64 w3-light-grey">
            <div className="w3-content w3-card-4 w3-white w3-round-large">
                <div className="w3-container w3-theme w3-padding w3-round-top">
                    <h2>Edição de Livro</h2>
                </div>


                <form className="w3-container w3-padding-24" onSubmit= {editarLivro}>
                    <div className="w3-section">
                        <label><b>Título</b></label>
                        <input className="w3-input w3-border w3-round"
                            type="text" name="titulo" value={titulo} 
                            onChange={(ev) => setTitulo(ev.target.value)} 
                            placeholder="Titulo do livro..." required />
                    </div>
                    <div className="w3-section">
                        <label><b>Preço</b></label>
                        <input className="w3-input w3-border w3-round"
                            type="number" name="preco" value={preco} 
                            onChange={(ev) => setPreco(+ev.target.value)} 
                            placeholder="Preço do livro..." required />
                    </div>
                    <div className="w3-row-padding w3-center w3-margin-top" style={{padding: 0}}>
                        <div className="w3-half w3-margin-bottom">
                            <input className="w3-button w3-theme w3-black w3-round w3-large"
                                type="submit" value="Salvar"/>
                        </div>
                        <div className="w3-half w3-margin-bottom">
                        <input className="w3-button w3-theme w3-black w3-round w3-large"
                            type="button" value="Voltar" onClick={voltar} />
                        </div>
                    </div>    
                </form>
            </div>
        </div>
    )
}