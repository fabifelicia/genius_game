let order = []
let clickedOrder = []
let score = 0

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const blue = document.getElementsByClassName('blue')[0]
const yellow = document.getElementsByClassName('yellow')[0]
const red = document.getElementsByClassName('red')[0]
const green = document.getElementsByClassName('green')[0]

// cria ordem aleatória de cores
let randomOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}

// acende a próxima cor
let lightColor = (element, time) => {
  time = time * 500
  setTimeout(() => {
    element.classList.add('selected')
  }, time - 250)
  setTimeout(() => {
    element.classList.remove('selected')
  }, time)
}

// checa se aos botões clicados são os mesmos da ordem gerada
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver()
      break
    }
  }

  if (clickedOrder.length == order.length) {
    score++
    alert(`Score: ${score}\n Você acertou! Passando para próximo nível!`)
    nextLevel()
  }
}

// função para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder()
  }, 250)
}

// função que retorna a cor
let createColorElement = (color) => {
  switch (color) {
    case 0:
      return green
      break
    case 1:
      return red
      break
    case 2:
      return yellow
      break
    case 3:
      return blue
      break
    default:
      return
      break
  }
}

// função para próximo nível
let nextLevel = () => {
  randomOrder()
}

// função para game over
let gameOver = () => {
  alert(`Score: ${score}!\nVocê perdeu.\n Clique em ok para continuar...`)
  order = []
  clickedOrder = []

  playGame()
}

// função inicio do jogo
let playGame = () => {
  alert('Bem vindo ao Genius! Iniciando novo jogo...')
  score = 0

  nextLevel()
}

//eventos de clique para as cores
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

//inicio do jogo
playGame()
