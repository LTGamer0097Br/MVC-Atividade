let produtos = [
    {
        id: 1,
        imagem: "https://i.imgur.com/L3CWL8a_d.webp?maxwidth=760&fidelity=grand",
        titulo: "Chocolate Eclair",
        descricao: "Um delicioso Eclair feito de chocolate e creme.",
        preco: "35,00"
    },
    {
        id: 2,
        imagem: "https://i.imgur.com/7CrjBee_d.webp?maxwidth=760&fidelity=grand",
        titulo: "Tomate",
        descricao: "Tomate vermelho",
        preco: "5,00"
    }
];
module.exports = {
    listar() {
        return produtos;
    },
    adicionar(produto) {
        produto.id = produtos.length + 1;
        produtos.push(produto);
    },
    editar(id, dados) {
        const produto = produtos.find((t) => t.id == id);
        if (produto) {
            produto.imagem = dados.imagem;
            produto.titulo = dados.titulo;
            produto.descricao = dados.descricao;
            produto.preco = dados.preco;
        }
    },
    excluir(id) {
        produtos = produtos.filter((t) => t.id != id);
    }
}; 