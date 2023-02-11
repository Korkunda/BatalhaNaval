class Board{

    constructor(){
        this.squares = this.generateSquares()
        this.currentSquareId = null
    }
    generateSquares(){
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        let board = []
        for(let i = 0; i < 10; i++){
            for(let x = 1; x <= 10; x++){
                board.push({id:`${letters[i]}${x}`, state: "unselected"}) 
            }
        }
        return board
    }
}

export {Board};
    // let board = new Board
    // console.log(board.squares)