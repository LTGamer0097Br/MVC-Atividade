const pM = require('../models/produtoModel');

module.exports = {
    exibirLista(req, res) {
        const produtos = pM.listar();
        res.render('listaProdutos', { produtos });
    },
    exibirAdicionarProduto(req, res) {
        res.render('adicionarProduto');
    },
    adicionarProduto(req, res) {
        const novoProduto = {
            imagem: req.body.imagem,
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            preco: req.body.preco
        };
        pM.adicionar(novoProduto);
        res.redirect('/');
    },
    exibirEdicao(req, res) {
        const { id } = req.params;
        const produto = pM.listar().find((t) => t.id == id);
        res.render('editaProduto', { produto });
    },
    editarProduto(req, res) {
        const { id } = req.params;
        pM.editar(id, req.body);
        res.redirect('/');
    },
    excluirProduto(req, res) {
        const { id } = req.params;
        pM.excluir(id);
        res.redirect('/');
    }
}; 