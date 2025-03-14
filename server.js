const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const pC = require('./controllers/produtoController');

const app = express();
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'layout', // Define layout padrão como "layout.handlebars" 
    layoutsDir: __dirname + '/views/' // Ajusta o diretório de layouts 
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas 
app.get('/', pC.exibirLista);
app.get('/produtos/adicionar', pC.exibirAdicionarProduto);
app.post('/produtos', pC.adicionarProduto);
app.get('/produtos/:id/editar', pC.exibirEdicao);
app.post('/produtos/:id/editar', pC.editarProduto);
app.get('/produtos/:id/excluir', pC.excluirProduto);

// Iniciar o servidor 
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
}); 