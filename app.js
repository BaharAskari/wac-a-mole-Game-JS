const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('.time-left')
const score = document.querySelector('.score')

let result = 0
let hitPosition
let currentTime = 10 
let timerId = null


function randomSquare() {
  squares.forEach(squares => {
    squares.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(squares => {
  squares.addEventListener('mousedown', () => {
    if (squares.id == hitPosition) {
      result++
      score.innerHTML = result
      console.log(score)
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

// setting time count dwon

function countDown() {
 currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert(' GAME OVER!  your final score is ' + result)
  }
}

let countDownTimerId = setInterval(countDown, 1000)