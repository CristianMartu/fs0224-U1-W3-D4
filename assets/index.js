const boardPosition = document.getElementById('board-game')
const tablePosition = document.getElementById('table-conteiner')
const counterPosition = document.getElementById('btn')
counterPosition.hidden = true

const createCell = (numeri, position, order = true) => {
  for (let i = 0; i < numeri; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    if (order) {
      cell.innerText = i + 1
    } else {
      cell.innerText = Math.floor(Math.random() * 77)
    }
    position.appendChild(cell)
  }
}

const createTable = (n, position) => {
  for (let i = 0; i < n; i++) {
    const tableConteiner = document.createElement('div')
    tableConteiner.classList.add('table')
    createCell(14, tableConteiner, false)
    position.appendChild(tableConteiner)
  }
}

const readTable = (e) => {
  const pos = document.querySelector('input')
  const boardNumber = pos.value
  createTable(boardNumber, tablePosition)
}

const searchNum = (number) => {
  const cellPos = document.querySelectorAll('.cell')
  cellPos.forEach((element) => {
    const val = parseInt(element.innerText)
    if (val === number) {
      console.log(element)
      console.dir(element)
      element.classList.add('selected')
    }
  })
}

const startGame = (e) => {
  e.preventDefault()
  counterPosition.hidden = false

  counterPosition.addEventListener('click', (changeNumber) => {
    const randomNumber = Math.floor(Math.random() * 77)
    counterPosition.innerText = randomNumber
    searchNum(randomNumber)
  })
}

const tables = document.getElementById('add-table')
tables.addEventListener('click', readTable)

const gameButton = document.getElementById('start')
gameButton.addEventListener('submit', startGame)

const boardGames = createCell(76, boardPosition)
