import listaLivros from "../data/Livros.json"
import CardLivro from "./CardLivro"


export default function ListCardLivros() {
    console.log(listaLivros);
    return (
        <div className="w3-row w3-container w3-margin-top">

        {listaLivros.map(livro => 
            <CardLivro key={livro.id} livro={livro} />
        )}    
        </div>
    )
}