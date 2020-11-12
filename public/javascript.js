$(document).on('click', '#buttonSubmit', function (e) {
    e.preventDefault();
    window.location.href = "/";

});

$(document).on('click', '#exit', function (e) {
    e.preventDefault();
    window.location.href = "/login";

});


$(document).on('click', '#logo-img', function (e) {
    e.preventDefault();
    window.location.href = "/";

});

$(document).on('click', '#produtos', function (e) {
    e.preventDefault();
    window.location.href = "/produtos";

});

$(document).on('click', '#vendas', function (e) {
    e.preventDefault();
    window.location.href = "/vendas";

});

$(document).on('click', '#fornecedor', function (e) {
    e.preventDefault();
    window.location.href = "/fornecedor";

});

$(document).on('click', '#usuarios', function (e) {
    e.preventDefault();
    window.location.href = "/usuarios";

});

$(document).on('click', '#relatorio', function (e) {
    e.preventDefault();
    window.location.href = "/relatorios";

});

$(document).on('click', '#add_produtos', function (e) {
    e.preventDefault();
    window.location.href = "/formulario_inclusao_produto";

});