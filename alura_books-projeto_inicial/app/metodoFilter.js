const botoes = document.querySelectorAll('.btn')

// Com o forEach é possivel pegar todos os botões e adicionar o evento de filtrar livros
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    // Criamos uma variavel passando nela o "this.id" para saber qual é o botão que está sendo clicado
    // E criamos outra variavel com o valor elementoBtn.value
    // Isso fara com que ao clicar nos botoes possam ser verificados seu valor(value), no caso a categoria
    // para que possa ser feita a filtragem.
    const categoria = elementoBtn.value
    // O codigo anterior foi extraiodo para uma função global
    // Isso melhora a legibilidade do codigo
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDispobilidade() : filtrarPorCategoria(categoria)
    exibirOsLivros(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDosDisponiveis(livrosFiltrados)
        exibirValorTotal(valorTotal)
    }

    function exibirValorTotal(valorTotal) {
        valoTotalLivrosDispo.innerHTML = ` <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>`
    }
}

// Função de escopo global
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

// Função de escopo global
function filtrarPorDispobilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}
