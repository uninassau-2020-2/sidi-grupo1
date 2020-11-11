module.exports = function(){

	this.getProdutos = function(connection, callback){
		connection.query('SELECT * FROM main', callback);
	}

	this.getProduto = function(connection, callback){
		connection.query('select * from main where id = 1', callback);
	}

	this.getVendas = function(connection, callback){
		connection.query('SELECT * FROM vendas', callback);
	}

	this.salvarProduto = function(produto, connection, callback){
        connection.query('INSERT INTO main SET ?', produto, callback);
    }

	return this;
}