module.exports = function(application) {
	
	application.get('/vendas', function(req, res){
	
		var connection = application.config.dbConnection();
		var produtoModel = application.app.models.produtoModel;

		produtoModel.getProdutos(connection, function(error, result){
			res.render("admin/vendas", {produtos : result});
		});	
	});

};