module.exports = function(application) {
	
	application.get('/relatorios', function(req, res){
	
		var connection = application.config.dbConnection();
		var produtoModel = application.app.models.produtoModel;

		produtoModel.getVendas(connection, function(error, vendas){
			produtoModel.getProdutos(connection, function(error, produtos){
				//console.log(produtos[1])
			res.render("admin/relatorios", {vendas : vendas, produtos: produtos});
			});	
		});	

		
	});

};