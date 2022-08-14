const player1 = 'X';
const player2 = 'O';
const boxElements = document.querySelectorAll(".box")
const theWinner = document.querySelector('.winner p')
let circleTurn;
let currentPlayer;
let stepCount = 0
const winner = [
   [0, 1, 2],
   [3, 4 ,5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
]


// csak egyszer lehessen klikkelni

boxElements.forEach(box => {
    box.addEventListener('click', handleClick, {once: true})
  })

// function handleClick (e) {
// 	console.log('ide már klikkeltem')
//    }

 // kirakja a markot

 function handleClick (e) {
    const box = e.target;
    currentPlayer = circleTurn ? player2 : player1;
    markTheBox(box, currentPlayer);
    circleTurn = !circleTurn;
    if (checkWin(currentPlayer)) {
        theWinner.textContent = `${currentPlayer} is the winner`
        boxElements.forEach(box => {
            box.removeEventListener('click', handleClick, {once: true})
          })
    } else if (stepCount === 9) {
        theWinner.textContent = "It's a tie"
        boxElements.forEach(box => {
            box.removeEventListener('click', handleClick, {once: true})
          })
    }
 }

 function markTheBox (box, currentPlayer) {
        box.classList.add(currentPlayer)
        stepCount++
 }

 function checkWin(currentPlayer) {
    return winner.some(combo => {
        return combo.every(index => {
            return boxElements[index].classList.contains(currentPlayer)
        })
    })
 }