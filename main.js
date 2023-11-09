const messages = [
  'O nosso primeiro e último amor é… o amor-próprio.',
  'Deixe de lado as preocupações e seja feliz.',
  'A vontade das pessoas é a melhor das leis.',
  'Nós somos o que pensamos.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
  'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.',
  'O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.',
  'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
  'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.',
  'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
  'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.',
  'Motivação não é sinónimo de transformação, mas um passo em sua direção.',
  'O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.',
  'A inspiração vem dos outros. A motivação vem de dentro de nós.',
  'Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.',
  'A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!',
  'Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..',
  'Acredite em milagres, mas não dependa deles.',
  'Você sempre será a sua melhor companhia!',
  'Realize o óbvio, pense no improvável e conquiste o impossível.'
]

const cookieClosed = document.querySelector('.cookieClosed')
const cookieOpened = document.querySelector('.cookieOpened')
const btnOpen = document.querySelector('#btnOpen')
const btnClose = document.querySelector('#btnClose')
let messageRandom = Math.round(Math.random() * messages.length)

// Eventos
btnOpen.addEventListener('click', handleClick)
btnClose.addEventListener('click', handleResetClick)

// Funções

function handleClick() {
  toggleScreen()
  cookieOpened.querySelector('p').innerText = messages[messageRandom]
}

function handleResetClick() {
  messageRandom = Math.round(Math.random() * messages.length)
  toggleScreen()
}

function toggleScreen() {
  cookieClosed.classList.toggle('hide')
  cookieOpened.classList.toggle('hide')
}
