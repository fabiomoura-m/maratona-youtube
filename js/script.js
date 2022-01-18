//SELECIONANDO UM ELEMENDO DO MEU HTML, A LISTA DE DESTAQUE
let listaDestaque = document.querySelector('.secaoVideosDestaque__lista')
let secaoTodosVideos = document.querySelector('.secaoTodosVideos__lista')
let listaReproducao = document.querySelector('.secaoAdicionarAFila__lista')

//ARRAY DE VÍDEOS
const listaVideos = [
  {
    id: 0,
    titulo: 'Conheça todo o universo da Kenzie Academy Brasil',
    visualizacoes: '2,7 mil visualizacoes',
    descricao:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!',
    thumbnail: './img/thumb1.webp'
  },
  {
    id: 1,
    titulo: 'Conheça todo o universo da Kenzie Academy Brasil',
    visualizacoes: '2,7 mil visualizacoes',
    descricao:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!',
    thumbnail: './img/thumb2.webp'
  },
  {
    id: 2,
    titulo: 'Conheça todo o universo da Kenzie Academy Brasil',
    visualizacoes: '2,7 mil visualizacoes',
    descricao:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!',
    thumbnail: './img/thumb1.webp'
  },
  {
    id: 3,
    titulo: 'Conheça todo o universo da Kenzie Academy Brasil',
    visualizacoes: '2,7 mil visualizacoes',
    descricao:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!',
    thumbnail: './img/thumb2.webp'
  }
]

//FUNÇÃO QUE VAI LISTAR OS VIDEOS, UTILIZANDO UM LOOP FOR
function listarVideos(listaDestaque) {
  for (let i = 0; i < listaVideos.length; i++) {
    //ACESSANDO VALORES DO VÍDEO
    let titulo = listaVideos[i].titulo
    let visualizacoes = listaVideos[i].visualizacoes
    let descricao = listaVideos[i].descricao
    let thumbnail = listaVideos[i].thumbnail

    // console.log(listaVideos[i].titulo)
    // console.log(listaVideos[i].visualizacoes)
    // console.log(listaVideos[i].descricao)
    // console.log(listaVideos[i].thumbnail)

    //PASSANDO PARA FUNÇÃO CRIAR O TEMPLATE
    criarTemplate(listaDestaque, titulo, visualizacoes, descricao, thumbnail)
  }
}

// LISTANDO VÍDEOS
listarVideos(listaDestaque)
listarVideos(secaoTodosVideos)

//FUNÇÃO QUE CRIA O TEMPLATE
function criarTemplate(
  listaDestaque,
  titulo,
  visualizacoes,
  descricao,
  thumbnail
) {
  //CRIANDO UM ELEMENTO DO TIPO HTML => LI
  let li = document.createElement('li')

  //ESTOU ADICIONANDO TAGS E O CONTEÚDO PARA DENTRO DESSE LI
  li.innerHTML = `
    <figure>
      <img src="${thumbnail}" alt="{titulo}">
    </figure>

    <div>
      <h3>${titulo}</h3>
      <span>${visualizacoes}</span>
      <p>${descricao}</p>
      <button class="buttonAdicionarAFila">Adicionar a fila</button>
    </div>
  `
  // console.log(li)

  //ESTOU ADICIONANDO O LI PREENCHIDO DENTRO DA MINHA LISTA LÁ NO HTML
  listaDestaque.appendChild(li)
}

// FUNÇÕES DE CLIQUE
listaDestaque.addEventListener('click', adicionarAFila)

//FUNÇÃO QUE ADICIONA NA LISTA DE REPRODUÇÃO
function adicionarAFila(event) {
  // console.log(event.target.tagName)

  // PEGA O ELEMENTO CLICADO
  const button = event.target

  // PEGA O NOME DO ELEMENTO
  const buttonName = event.target.tagName

  //VERIFICAÇÃO SE É UM BOTÃO
  if (buttonName == 'BUTTON') {
    //PEGA O PAI DO BOTÃO
    const li = button.closest('li')

    //FAZ UMA CÓPIA DESSE ELEMENTO
    const liCopy = li.cloneNode(true)

    //ADICIONA NA LISTA DE REPRODUÇÃO
    listaReproducao.appendChild(liCopy)

    // console.log(li)
  }
}

// FUNÇÃO DE CLIQUE
listaReproducao.addEventListener('click', removerDaFila)

function removerDaFila(event) {
  // PEGA O ELEMENTO CLICADO
  const elemento = event.target

  //PEGA O PAI DO ELEMENTO
  const li = elemento.closest('li')

  //REMOVE
  li.remove()
}
