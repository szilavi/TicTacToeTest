const player1 = 'X';
const player2 = 'O';
const boxElements = document.querySelectorAll(".box")
let circleTurn;
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

//function handleClick (e) {
//	console.log('ide már klikkeltem')
//   }

// kirakja a markot

function handleClick (e) {
   const box = e.target;
   const currentPlayer = circleTurn ? player2 : player1;
   markTheBox(box, currentPlayer);
   swapPlayer ();
   if (checkWin(currentPlayer)) {
       console.log("win")
   }
}

function markTheBox (box, currentPlayer) {
       box.classList.add(currentPlayer)
}

function swapPlayer() {
    swapPlayer = !swapPlayer
}

function checkWin(currentPlayer) {
   return winner.some(combo => {
       return combo.every(index => {
           return boxElements[index].classList.contains(currentPlayer)
       })
   })
}