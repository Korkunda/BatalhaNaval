import {Board} from "./Ships/Board.js"
import {PortugalShips, StandardShips} from "./Ships/Ships.js"

//SHIPS
let shipsList = document.getElementById("ship-list")
let currentShipId = null

/*make an array of shiplists*/
let shipLists = [StandardShips, PortugalShips] 
let currentShipList = 0


//BOARD
let board = new Board()
let grid = document.getElementById("grid")
let markersHorizontal = document.getElementById("markers-horizontal")
let markersVertical = document.getElementById("letters")

//GRID--------------------------------------------------------------
//GRID-SQUARES
function generateButtons(){
    for(let i = 0; i < board.squares.length; i++){
        let square = document.createElement('BUTTON')
        square.id = board.squares[i].id
        square.className = "square"
        square.onclick = ()=>select(square)
        grid.appendChild(square)
    }
}

//GRID-MARKERS
function generateMarkers(){
    //NUMBERS
    for(let i = 1; i < 11; i++){
        let number = document.createElement('H1')
        number.id = "marker"
        number.className = "number"
        number.innerText = i
        markersHorizontal.appendChild(number)
    }
    //LETTERS
    for(let i = 0; i < 10; i++){
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        let letter = document.createElement('H1')
        letter.id = "marker"
        letter.className = "letter"
        letter.innerText = letters[i]
        markersVertical.appendChild(letter)
    }
}

//SQURA-SELECT
function select(square){
    if(square.id === board.currentSquareId){
        square.className = "square"
        board.currentSquareId = null
    } else if(board.currentSquareId !== null){
        let oldSquare = document.getElementById(board.currentSquareId)
        oldSquare.className = "square"
        square.className = "square-selected"
        board.currentSquareId = square.id
    } else {
        square.className = "square-selected"
        board.currentSquareId = square.id
    }

}

//SHIPS------------------------------------------------------------
//SHIPS-LIST
function generateShipList(theme){
    for(let i = 0; i < theme.length; i++){
        let ship = document.createElement('BUTTON')
        ship.id = theme[i].name
        ship.className = "ship"
        ship.innerText = theme[i].name
        ship.onclick = ()=>selectShip(ship)
        shipsList.appendChild(ship)
    }
}

//SHIP-SELECT
function selectShip(ship){
    if(ship.id === currentShipId){
        ship.className = "ship"
        currentShipId = null
    } else if(currentShipId !== null){
        let oldShip = document.getElementById(currentShipId)
        oldShip.className = "ship"
        ship.className = "ship-selected"
        currentShipId = ship.id
    } else {
        ship.className = "ship-selected"
        currentShipId = ship.id
    }
    console.log(currentShipId)
}

//ARROWS
function nextShipList(){
    let ship = document.getElementsByClassName("ship")
    if(currentShipList < shipLists.length - 1){
        for(let i = 0; i < ship.length; i++){
            ship[i].remove()
        }
        currentShipList++
        generateShipList(shipLists[currentShipList])
        console.log(currentShipList)
    }
}

function previousShipList(){
    if(currentShipList > 0){
        for(let i = 0; i < shipList.length; i++){
            shipList[i].remove()
        }
        currentShipList--
        console.log(currentShipList)
        generateShipList(shipLists[currentShipList])
    }
}

generateButtons()
generateMarkers()

generateShipList(currentShipList)
nextShipList()




