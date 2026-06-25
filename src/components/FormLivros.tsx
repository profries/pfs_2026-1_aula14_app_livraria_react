import { useState, type FormEvent } from "react"
import LivroApiService from "../service/LivroApiService";

export default function FormLivros() {
    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState(0);
    
    function cadastrarLivro(evento: FormEvent<HTMLFormElement>){
        evento.preventDefault();
        LivroApiService.inserir({
            titulo: titulo,
            imagem: "pequenoprincipe.jpg",
            preco: preco
        }).then(() => {
            alert("Livro cadastrado com sucesso!");
            setTitulo("");
            setPreco(0);
        }).catch(err => console.log("Erro: "+err));
    }

    return (
        <div className="w3-container w3-padding-64 w3-light-grey">
            <div className="w3-content w3-card-4 w3-white w3-round-large">
                <div className="w3-container w3-theme w3-padding w3-round-top">
                    <h2>Cadastro de Livro</h2>
                </div>

                <form className="w3-container w3-padding-24" onSubmit={cadastrarLivro}>
                    <div className="w3-section">
                        <label><b>Titulo:</b></label>
                        <input className="w3-input w3-border w3-round"
                            type="text" name="titulo" 
                            value={titulo} onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className="w3-section">
                        <label><b>Preço:</b></label>
                        <input className="w3-input w3-border w3-round"
                            type="number" name="preco" 
                            value={preco} onChange={(e) => setPreco(+e.target.value)}
                        />
                    </div>
                    <input className="w3-button w3-theme w3-black w3-round w3-large"
                        type="submit" value="Salvar" /> 
                </form>
            </div>
        </div>
    )
}