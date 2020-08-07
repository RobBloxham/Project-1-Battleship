/* Project setup
some of the things i will need
on start setup game (initialize function)
Randomly generate a winning combination (maybe there is a way i can use an api here to grab random numbers?)
define constants 
define variables
store elements

onclick interaction that will when clicked ineract with board 
Hit or miss function:
1) if hit has ship been sunk?
2) if sunk does this meet win conidition? (call a check winner function)
  2.1) if sunk and does not meet win condition place a destroyed ship piece on board (maybe something at the bottom of the grid to indicate how many ships are left)
3) if miss place a marker for miss

when reset button is clicked what happens

Check winner function

initiliaze function

check ship sunk function

Top Secret Button (if i dont randomly generate the ship placement via an api this will call on api for something TBD) */

/* solving what I think will be my biggest issue with this game: placing ships randomly on the board both horizontally (easy) and vertically (much harder):

If i make the board an array that contains arrays for each row i.e. a 5x5 would be 
board [
  [sq01, sq02, sq03, sq04, sq05],
  [sq06, sq07, sq08, sq09, sq10],
  [sq11, sq12, sq13, sq14, sq15],
  [sq16, sq17, sq18, sq19, sq20],
  [sq21, sq22, sq23, sq24, sq25],
]
lets assume the ship size for this is 3x1 
I can generate a random number/coinflip that will determine if the piece will be 1(heads) horizontal or 2(tales) vertical

if 1 generate a random number between 1 and 5 to determine which row(j) the ship will go
then generate a random number between 1 and 3 as 3 would be the furthers place from the left a 3x1 ship would fit in a row.
Before placing the piece it should call on a function that will ensure that places the ship wants to go are currently empty.

if 2 generate a random number between 1 and 5 to determine which column(i) the ship will go in to 
then generate a random number between 1 and 3 as 3 would be the furthest place from the top that the ship could be placed.
Before placing call on a function that will ensure that places the ship wants to go are currently empty. */


/*------Constants------*/
// i.e. audio/picture elments that are being placed later


/*------Variables (state)------*/

let ships = [
  {location: [[0,0],[0,0]], hits: ["", ""]},
  {location: [[0,0],[0,0],[0,0]], hits: ["", "", ""]},
  {location: [[0,0],[0,0],[0,0]], hits: ["", "", ""]}
]
let board, shipsSunk, winner

/*------Cached Element References------*/

const highScoreEl = document.getElementById('message')
const squareEl = document.querySelectorAll('div')
const resetBtn = document.getElementById('resetButton')
const messageEl = document.getElementById('message')

/*------Event Listeners------*/

resetBtn.addEventListener('click', init)
document.querySelector('section').addEventListener('click', onClick)

/*------Functions------*/

function init(){
  board = [
    [null, null, null, null, null, ],
    [null, null, null, null, null, ],
    [null, null, null, null, null, ],
    [null, null, null, null, null, ],
    [null, null, null, null, null, ]
  ]
  placeShips()
  messageEl.innerHTML = "Make your first move"
}
// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading
// set board to let board = [

function placeShips(){

}
//place ships function
// pick and x between 0-4, pick a y between 0-4 (this will determine which array and the eindex of the aray to start the placement)
// pick direction
// plotting horizontally add/subtract 1 to get the index in the array that is chesen by the y
// plotting vertically add/subtract 1 to get the array
// if value of first x,y = null push to a temporary array
// i++ based on length of ship 
// if x,y != null +1 to direction and start over
// if all values are null then change value from null to 0

function onClick(){

}
// On-Click function:
// Set up what happens when one of the elements
// is clicked  hit if not hit then miss 
// if hit change value to 1 
// if miss change value to 2

function checkWinner(){
  if (board.includes("0")){
    winner = null
  } else {
    winner = '1'
  }
}
// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so
// if board does not contain any 0's declare winner

function redner(){

}
// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// if spot on board is 1 place damaged img or css effect
// if spot on board is 2 place missed img








// function sunk(){

// }
// // check if ship is sunk function:
// // might be able to pair this with the check winner?

// function avoidCollision(){

// }
// // avoid collision function:
// // will make sure the spaces a ship is about to be placed are empty before placing
// // check each cell determined by the length of hte ship to see if its occupied
// // if all are null set each of those cells to 0 to represent that it is occupied
// // if any are 0 add/subtract 

