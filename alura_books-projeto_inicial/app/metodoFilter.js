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
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirOsLivros(livrosFiltrados)
}