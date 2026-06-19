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
        <form onSubmit={cadastrarLivro}>
            <label>Titulo:</label>
            <input type="text" name="titulo" 
                value={titulo} onChange={(e) => setTitulo(e.target.value)}
            />
            <br />
            <label>Preço:</label>
            <input type="number" name="preco" 
                value={preco} onChange={(e) => setPreco(+e.target.value)}
            />
            <br />
            <input type="submit" value="Salvar" /> 
        </form>
    )
}