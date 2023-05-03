let startGame = document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square")
     
    squares.forEach((square) => {
        square.addEventListener('click', handClick)
    })
})



function handClick(event){
    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        setTimeout(()=>{
            alert(`o Jogo acabou - O vencedor foi ${playerTime}`)
        }, 10)
        
    };
    updateSquares(position);
}
function updateSquares(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class="${symbol}"><div>`
}

// function updateSquares(){
//     let squares = document.querySelectorAll(".square");
//     squares.forEach((square) => {
//         let position = square.id
//         let symbol = board[position]

//         if(symbol != '') {
//             square.innerHTML += `<div class="${symbol}"><div>`
//         }
//     })
// }

function resetGame() {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.innerHTML = ``
        board = ['','','','','','','','','']
        gameOver = false
    })
}