let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPreco.addEventListener('click', ordenarLivrosPPreco)

function ordenarLivrosPPreco (){
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco) 
    exibirOsLivros(livrosOrdenados)
}