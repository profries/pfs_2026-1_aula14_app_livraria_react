export interface Livro {
    id?: number;
    imagem: string;
    titulo: string;
    preco: number;
}


export interface CardLivroProps {
    livro: Livro;
}
