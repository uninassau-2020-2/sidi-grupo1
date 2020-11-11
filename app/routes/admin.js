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
}