module.exports = function(){

	this.getProdutos = function(connection, callback){
		connection.query('SELECT * FROM main WHERE deleted = 0', callback);
	}

	this.getProduto = function(connection, id_produto, callback){
		connection.query('select * from main where id = '+id_produto, callback);
	}

	this.getVendas = function(connection, callback){
		vendas = connection.query('SELECT * FROM vendas', callback);
	}

	this.salvarProduto = function(produto, connection, callback){
        connection.query('INSERT INTO main SET ?', produto, callback);
	}
	
	this.editarProduto = function(connection, id_produto, nome, descricao, valor, callback){
		console.log(id_produto, nome, valor)
		if(valor==""){
			valor = 0
		}
        connection.query('UPDATE main SET nome = "'+nome+'", descricao = "'+descricao+'", valor = "'+valor+'" WHERE id = '+id_produto+';', callback);
	}

	this.deleteProduto = function(connection, id_produto, callback){
		connection.query('UPDATE main SET deleted = 1 where id ='+id_produto+';', callback);
	}

	this.venderProduto = function(connection, id_produto, quantidade, callback){
        connection.query('INSERT INTO vendas (id_produto, quantidade, id_funcionario) VALUES ('+id_produto+','+quantidade+', 1)', callback);
	}
	
	return this;
}