const InserirLivros = document.getElementById('livros')
const valoTotalLivrosDispo = document.getElementById('valor_total_livros_disponiveis')
function exibirOsLivros(listaDeLivros) {
  InserirLivros.innerHTML = ''
  valoTotalLivrosDispo.innerHTML=''
  listaDeLivros.forEach(livro => {

    // let disponibilidade = verificaDisponibilidadeLivro(livro) 
    // Como podemos ver a baixo a nossa  verificação pode ser reduzida de uma função para uma linha.
    let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livros_imagens indisponivel'
    // A linha a cima pode ser explicada como "livro.quantidade é maior que 0 " se for ("?") 
    // retorne 'livro_imagens' caso contrario retorne 'livros_imagens indisponivel'

    InserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
  })
}

// Função reduzida
// function verificaDisponibilidadeLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro_imagens'
//   }

//   else{
//     return'livros_imagens indisponivel'
//   }
// }
