import { useNavigate } from "react-router";
import type { CardLivroProps } from "../models/Livro";


export default function CardLivro ({ livro }: CardLivroProps) {
    const navigate = useNavigate();
    const editarProduto = () => {
        navigate(`/edit/${livro.id}`)
    }

    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16" onClick={editarProduto}>
            <div className="w3-card">
                <div className="w3-container w3-center">
                    <img src={livro.imagem} style={{ width: "70%" }} />
                    <h5>{livro.titulo}</h5>
                    <h3 className="w3-black">
                        {livro.preco.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})}
                    </h3>
                </div>
            </div>
        </div>
    )
}