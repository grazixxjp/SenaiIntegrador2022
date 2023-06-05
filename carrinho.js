carrinho = []
produtos = [
    {id:1,nome:"Anilhas",preco:156.90},
    {id:2,nome:"Acabamento de Escapamento",preco:255.50},
    {id:3,nome:"Pedaleira",preco:42.00},
    {id:4,nome:"Gancho Hook",preco:99.00},
    {id:5,nome:"Sniper R",preco:384.00},
    {id:6,nome:"Quick Flip Realease",preco:110.00}
]
function comprar(id){
    var produto = produtos.find(x =>x.id==id)
    carrinho.push({nome:produto.nome,preco:produto.preco})
    alert("Produto Adicionado!")
    salvarCarrinho()
}
function exibirProdutos(){
    var codigoHtml="";
    var valorTotal=0;
    carrinho.forEach(produto=>{
        codigoHtml+=`${produto.nome}-R$ ${produto.preco} <a id="X" href="#" onclick="removerItens(${produto.id})"id="total">Remover Item</a>`
        valorTotal+=produto.preco
    })
    codigoHtml+=`<p id="total">Subtotal: R$ ${valorTotal.toFixed(2)}</p>`
    document.getElementById("produtinhos").innerHTML=codigoHtml
}
function salvarCarrinho(){
    localStorage.setItem("lowv01",JSON.stringify(carrinho))
}
function obterCarrinho(){
    if(localStorage.getItem("lowv01")!=null){
        carrinho=JSON.parse(localStorage.getItem("lowv01"))
        exibirProdutos()
    }
}
function removerItens(id){
    carrinho.splice(id,1)
    salvarCarrinho()
    obterCarrinho()
}
function apagarCarrinho(){
    localStorage.clear()
    carrinho=[]
    salvarCarrinho()
    obterCarrinho()
    alert("Compra realizada com sucesso!")
}
obterCarrinho()