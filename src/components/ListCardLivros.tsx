import { useEffect, useState } from "react"
import CardLivro from "./CardLivro"
import LivroApiService from "../service/LivroApiService"
import type { Livro } from "../models/Livro";



export default function ListCardLivros() {
    const [listaLivros, setListaLivros] = useState([]);

    useEffect(() => {
        LivroApiService.listar().then(
            livros => setListaLivros(livros)
        )
    }, [])

    return (
        <div className="w3-row w3-container w3-margin-top">

        {listaLivros.map((livro: Livro) => 
            <CardLivro key={livro.id} livro={livro} />
        )}    
        </div>
    )
}