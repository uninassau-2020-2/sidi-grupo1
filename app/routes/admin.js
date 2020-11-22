module.exports = function(application){
	application.get('/formulario_inclusao_produto', function(req, res){
		res.render("admin/form_add_produto");	
	});

	application.post('/produtos/salvar', function(req,res){
        var produto = req.body;

        var connection = application.config.dbConnection();
		var produtoModel = application.app.models.produtoModel;

        produtoModel.salvarProduto(produto, connection, function(error, result){
            res.redirect('/produtos');
        });
    });

    application.post('/produtos/editar', function(req,res){
        var produto = req.body;

        var connection = application.config.dbConnection();
		var produtoModel = application.app.models.produtoModel;

        produtoModel.editarProduto(connection,produto.id_produto, produto.nome_produto, produto.desc_produto, produto.valor_produto, function(error, result){
            res.redirect('/produtos');
        });
    });

    application.post('/produtos/deletar', function(req,res){
        var produto = req.body;

        var connection = application.config.dbConnection();
		var produtoModel = application.app.models.produtoModel;

        produtoModel.deleteProduto(connection,produto.id_produto, function(error, result){
            res.redirect('/produtos');
        });
    });

    application.post('/produtos/vender', function(req,res){
        var produto = req.body;
        console.log(produto)
        var connection = application.config.dbConnection();
		var produtoModel = application.app.models.produtoModel;

        produtoModel.venderProduto(connection,produto.produto, produto.quantidade, function(error, result){
            res.redirect('/vendas');
        });
    });
}