import axios from "axios";

const URI = "http://localhost:3000/livros";

async function listar() {
    const response = await axios.get(URI);
    return response.data;
}

async function inserir(livro: any){
    const response = await axios.post(URI, livro);
    return response.data;
}

async function buscarPorId(id?: number) {
    if(id) {
        const response = await axios.get(URI+"/"+id);
        return response.data;
    }
    else {
        throw "id não encontrado!";
    }
}

async function atualizar(id?:number, livro?:any) {
    if(id && livro){
        const response = await axios.put(URI+"/"+id, livro)
        return response.data;
    }
    else {
        throw "Erro: id ou livro não encontrados";
    }
}

export default {
    listar, inserir, buscarPorId, atualizar
}