module.exports = function(application) {
	
	application.get('/produtos', function(req, res){
	
		var connection = application.config.dbConnection();
		var produtoModel = application.app.models.produtoModel;

		produtoModel.getProdutos(connection, function(error, result){
			res.render("produtos/produtos", {produtos : result});
		});	
	});

};