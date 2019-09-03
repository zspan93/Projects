


/*
 * Group 2: Pacman
 * Purpose: Created a version of the arcade game Pacman using Javascript, CSS, and HTML.
 * ~ Making sure that it follows the simple rules and preforms basic movements and
 *  and score tracking.
 * ~ Below are a series of functions that will allow this pacman game to work.
 */

/*
 *Function: Game Board
 *  A 2D array of five numbers that signify whether a bean, a wall, the Pacman,
 *  a ghost, or a power bean will occupy that space at the start of game play.
 *
 * Number Key:
 *  0: bean
 *  1: wall
 *  2: Pacman
 *  3: ghost
 *  4: power bean
 *  5: empty space
 */

// prettier-ignore
const BOARD = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 3, 0, 3, 0, 3, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 4, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 4, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const canvas = document.getElementById("board");
const context = canvas.getContext("2d");
canvas.width = canvas.height = document.body.clientHeight;
const IMG_WIDTH = canvas.width / BOARD.length;
const IMG_HEIGHT = canvas.width / BOARD.length;
//assigns the number in the grid to name of what it is on the board
const BEAN = 0;
const WALL = 1;
const PACMAN = 2;
const GHOST = 3;
const PBEAN = 4;
const EMPTY = 5;
const POWERBEAN_IMAGE = "./assets/img/powerbean.png";
const BEAN_IMAGE = "./assets/img/bean.png";
const WALL_IMAGE = "./assets/img/wall.png";
const PACMAN_IMAGE = "./assets/img/pacman.png";
const GHOST_IMAGE = "./assets/img/ghost.png";

const PACMAN_LEFT = "./assets/img/pacman_left.png";
const PACMAN_RIGHT = "./assets/img/pacman_right.png";
const PACMAN_UP = "./assets/img/pacman_up.png";
const PACMAN_DOWN = "./assets/img/pacman_down.png";
/*
 * Key parameters for the game of Pac-Man
 * List includes:
 * Number of Lives - set to 3 (standard amount)
 * Player's Score - Initially set to Zero
 * PowerBean - points allotted when eaten is 9.
 *		284 yellow beans and 9 red power bean.
 *		Decrements each time pacman eats one
 * Pac-Man's intial coordinates on the board - point (x = 13, y = 16)
 * Ghost 1, 2, and 3 coordinates on the board. Ghost start in the center within a box.
 */
let lives = 3;
let score = 0;
let powerBeanCount = 9;
let beanCount = 294; //285 reg. bean and 9 power bean. decrement each time pacman eats one

let pacman = {
  name: "pacman",
  location: PACMAN_IMAGE,
  x: 13,
  y: 16
};

let ghost1 = {
  name: "ghost1",
  location: GHOST_IMAGE,
  x: 11,
  y: 13
};

let ghost2 = {
  name: "ghost2",
  location: GHOST_IMAGE,
  x: 13,
  y: 13
};

let ghost3 = {
  name: "ghost3",
  location: GHOST_IMAGE,
  x: 15,
  y: 13
};

/*
 * Function name: moveUp
 * Sends a message to the console to show that the (up) key pressed has been pressed.
 * The if statement condition -> if pac-man's  next location is NOT a wall
 * 	if condition is satisfied decrement pac-man's coordinate by 1 on the y-axis, then switch the image of pac-man's next location from
 *   a bean/powerbean/empty space to pac-man. the pac-man's previous location to an empty space. Each space change changes the value until
 *   the whole board is empty of beans.
 */
function moveUp() {
  console.log("up pressed");
  if(BOARD[pacman.y - 1][pacman.x] === GHOST){
    lives--;
    resetPacman();
    gameTracker();
  }
  if (BOARD[pacman.y - 1][pacman.x] !== WALL) {
    pacman.y--;
    gameTracker();
    swap_remove(pacman, 0, 1, PACMAN_UP);
    BOARD[pacman.y][pacman.x] = PACMAN;
    BOARD[pacman.y + 1][pacman.x] = EMPTY;
  } else {
    console.log("hit a wall");
  }
}

/*
 * Function name: moveDown
 * Sends a message to the console to show that the (Down) key pressed has been pressed.
 * The if statement condition -> if pac-man's  next location is NOT a wall
 * 	if condition is satisfied increment pac-man's coordinate by 1 on the y-axis, then switch the image of pac-man's next location from
 *   a bean/powerbean/empty space to pac-man. the pac-man's previous location to an empty space. Each space change changes the value until
 *   the whole board is empty of beans.
 */
function moveDown() {
  console.log("down pressed");
  if(BOARD[pacman.y + 1][pacman.x] === GHOST){
    lives--;
    resetPacman();
    gameTracker();
  }
  if (BOARD[pacman.y + 1][pacman.x] !== WALL) {
    pacman.y++;
    gameTracker();
    swap_remove(pacman, 0, -1, PACMAN_DOWN);
    BOARD[pacman.y][pacman.x] = PACMAN;
    BOARD[pacman.y - 1][pacman.x] = EMPTY;
  } else {
    console.log("hit a wall");
  }
}

/*
 * Function name: moveLeft
 * Sends a message to the console to show that the (Left) key pressed has been pressed.
 * The if statement condition -> if pac-man's  next location is NOT a wall
 * 	if condition is satisfied decrement pac-man's coordinate by 1 on the x-axis, then switch the image of pac-man's next location from
 *   a bean/powerbean/empty space to pac-man. the pac-man's previous location to an empty space. Each space change changes the value until
 *   the whole board is empty of beans.
 */
function moveLeft() {
  console.log("left pressed");
  if(BOARD[pacman.y][pacman.x - 1] === GHOST){
    lives--;
    resetPacman();
    gameTracker();
  }
  if (BOARD[pacman.y][pacman.x - 1] !== WALL) {
    pacman.x--;
    gameTracker();
    swap_remove(pacman, 1, 0, PACMAN_LEFT);
    BOARD[pacman.y][pacman.x] = PACMAN;
    BOARD[pacman.y][pacman.x + 1] = EMPTY;
  } else {
    console.log("hit a wall");
  }
}

/*
 * Function name: moveRight
 * Sends a message to the console to show that the (Right) key pressed has been pressed.
 * The if statement condition -> if pac-man's  next location is NOT a wall
 * 	if condition is satisfied increment pac-man's coordinate by 1 on the x-axis, then switch the image of pac-man's next location from
 *   a bean/powerbean/empty space to pac-man. the pac-man's previous location to an empty space. Each space change changes the value until
 *   the whole board is empty of beans.
 */
function moveRight() {
  console.log("right pressed");
  if(BOARD[pacman.y][pacman.x + 1] === GHOST){
    lives--;
    resetPacman();
    gameTracker();7
  }
  if (BOARD[pacman.y][pacman.x + 1] !== WALL) {
    pacman.x++;
    swap_remove(pacman, -1, 0, PACMAN_RIGHT);
    gameTracker();
    BOARD[pacman.y][pacman.x] = PACMAN;
    BOARD[pacman.y][pacman.x - 1] = EMPTY;
  } else {
    console.log("hit a wall");
  }
}

/*
 *Function name: ghostMoveLeft
 * This function will move ghost to the left
 */
function ghostMoveLeft(character) {
  console.log(character.name + " moving left");
  if (BOARD[character.y][character.x - 1] === PACMAN) {
    lives--;
    console.log(character.name + " ATE PACMAN");
    resetPacman();
    gameTracker();
  }
  if (BOARD[character.y][character.x - 1] !== WALL &&
    !hasGhost(character.x - 1, character.y)
  ) {
    character.x--;
    swap(character, 1, 0);
    //BOARD[character.y][character.x] = GHOST;
    //BOARD[character.y][character.x + 1] = EMPTY;
  } else {
    console.log(character.name, "hit a wall");
  }
}

/*
 *Function name: ghostMoveRight
 * This function will move ghost to the right
 */
function ghostMoveRight(character) {
  console.log(character.name + " moving right");
  if (BOARD[character.y][character.x + 1] === PACMAN) {
    lives--;
    console.log(character.name + " ATE PACMAN");
    resetPacman();
    gameTracker();
  }
  if (
    BOARD[character.y][character.x + 1] !== WALL &&
    !hasGhost(character.x + 1, character.y)
  ) {
    character.x++;
    swap(character, -1, 0);
    //BOARD[character.y][character.x] = GHOST;
   // BOARD[character.y][character.x - 1] = EMPTY;
  } else {
    console.log(character.name, "hit a wall");
  }
}

/*
 *Function name: ghostMoveDown
 * This function will move ghost down
 */
function ghostMoveDown(character) {
  console.log(character.name + " moving down");
  if (BOARD[character.y + 1][character.x] === PACMAN) {
    lives--;
    console.log(character.name + " ATE PACMAN");
    resetPacman();
    gameTracker();
  }
  if (
    BOARD[character.y + 1][character.x] !== WALL &&
    !hasGhost(character.x, character.y + 1)
  ) {
    character.y++;
    swap(character, 0, -1);
    //BOARD[character.y][character.x] = GHOST;
    //BOARD[character.y - 1][character.x] = EMPTY;
  } else {
    console.log(character.name, "hit a wall");
  }
}

/*
 *Function name: ghostMoveUp
 * This function will move ghost up
 */
function ghostMoveUp(character) {
  console.log(character.name + " moving up");
  if (BOARD[character.y - 1][character.x] === PACMAN) {
    lives--;
    console.log(character.name + " ATE PACMAN");
    resetPacman();
    gameTracker();
  }
  if (
    BOARD[character.y - 1][character.x] !== WALL &&
    !hasGhost(character.x, character.y - 1)
  ) {
    character.y--;
    swap(character, 0, 1);
    //BOARD[character.y][character.x] = GHOST;
    //BOARD[character.y + 1][character.x] = EMPTY;
  } else {
    console.log(character.name, "hit a wall");
  }
}

function checkForGhost(){
  if(BOARD[pacman.y][pacman.x] === GHOST){
    lives--;
    resetPacman();
    gameTracker();
  }
}
/*
* Function name: resetPacman
* This function will reset the location of pacman after he gets "eaten" by one of the ghost.
*/
//resets the location of pacman after it gets eaten by a ghost
function resetPacman() {
  context.clearRect(
    pacman.x * IMG_WIDTH,
    pacman.y * IMG_HEIGHT,
    IMG_WIDTH,
    IMG_HEIGHT
  );
  BOARD[pacman.y][pacman.x] = EMPTY;
  pacman.x = 13;
  pacman.y = 16;
  drawPic(pacman.x * IMG_WIDTH, pacman.y * IMG_HEIGHT, pacman.location);
}

/*
 * Function: hasGhost
 * This function will return true if there is a ghost at (x,y) coordinate
 * will keep track of whether or not there are ghost are there. Keeps count of ghost.
 */
function hasGhost(x, y) {
  return (
    (ghost1.x === x && ghost1.y === y) ||
    (ghost2.x === x && ghost2.y === y) ||
    (ghost3.x === x && ghost3.y === y)
  );
}

/*
 *Function name: swap
 * This function will swap the location of the ghost as they move across the board
 * This function is similar to the swap function for pacman.
*/
function swap(character, lr, ud) {
  //console.log("move to", character.x, character.y);
  context.clearRect(
    character.x * IMG_WIDTH,
    character.y * IMG_HEIGHT,
    IMG_WIDTH,
    IMG_HEIGHT
  );
  drawPic(
    character.x * IMG_WIDTH,
    character.y * IMG_HEIGHT,
    character.location
  );
  context.clearRect(
    //clears old ghost from behind bean
    (character.x + lr) * IMG_WIDTH,
    (character.y + ud) * IMG_HEIGHT,
    IMG_WIDTH,
    IMG_HEIGHT
  );
  //console.log("move from", character.x + lr, character.y + ud);
  switch (BOARD[character.y + ud][character.x + lr]) {
    case BEAN:
      drawPic(
        (character.x + lr) * IMG_WIDTH,
        (character.y + ud) * IMG_HEIGHT,
        BEAN_IMAGE
      );
      break;
    case PBEAN:
      drawPic(
        (character.x + lr) * IMG_WIDTH,
        (character.y + ud) * IMG_HEIGHT,
        POWERBEAN_IMAGE
      );
      break;
    case PACMAN:
      drawPic(
        (character.x + lr) * IMG_WIDTH,
        (character.y + ud) * IMG_HEIGHT,
        PACMAN_IMAGE
      );
      break;
    default:
      context.clearRect(
        (character.x + lr) * IMG_WIDTH,
        (character.y + ud) * IMG_HEIGHT,
        IMG_WIDTH,
        IMG_HEIGHT
      );
      break;
  }
}

/*
 * Function name: swap_remove
 * parameters: character, lr, and ud
 * This function will swap the original tile image with the character 'Pac-Man' when their coordinates match.
 * deals with the adjacent tiles to pac-man. ie (up:-1, down:1, left:1, right:-1)
 * It will remove the tile from the canvas.
 */
function swap_remove(character, lr, ud, location) {
  context.clearRect(
    character.x * IMG_WIDTH,
    character.y * IMG_HEIGHT,
    IMG_WIDTH,
    IMG_HEIGHT
  );
  drawPic(character.x * IMG_WIDTH, character.y * IMG_HEIGHT, location);
  context.clearRect(
    (character.x + lr) * IMG_WIDTH,
    (character.y + ud) * IMG_HEIGHT,
    IMG_WIDTH,
    IMG_HEIGHT
  );
}

/*
* Function name: moveGhost 1, 2, and 3
* This function will call the functions below to move each ghost
* Each version of this function will move one of the three ghost.
* Each ghost moves differently along with the conditions that make the move possible.
*/
function moveGhosts() {
  moveGhost1();
  moveGhost2();
  moveGhost3();
}

function moveGhost1() {
  let interval = setInterval(() => {
    if (isGameOver()) {
      clearInterval(interval);
    } else {
      let { axis, direction } = moveDirection();
      if (axis === 0 && direction === -1) {
        ghostMoveUp(ghost1);
      }
      if (axis === 0 && direction === 1) {
        ghostMoveDown(ghost1);
      }
      if (axis === 1 && direction === -1) {
        ghostMoveLeft(ghost1);
      }
      if (axis === 1 && direction === 1) {
        ghostMoveRight(ghost1);
      }
    }
  }, 750);
}

function moveGhost2() {
  let interval = setInterval(() => {
    if (isGameOver()) {
      clearInterval(interval);
    } else {
      let { axis, direction } = moveDirection();
      if (axis === 0 && direction === -1) {
        ghostMoveUp(ghost2);
      }
      if (axis === 0 && direction === 1) {
        ghostMoveDown(ghost2);
      }
      if (axis === 1 && direction === -1) {
        ghostMoveLeft(ghost2);
      }
      if (axis === 1 && direction === 1) {
        ghostMoveRight(ghost2);
      }
    }
  }, 750);
}

function moveGhost3() {
  let interval = setInterval(() => {
    if (isGameOver()) {
      clearInterval(interval);
    } else {
      let { axis, direction } = moveDirection();
      if (axis === 0 && direction === -1) {
        ghostMoveUp(ghost3);
      }
      if (axis === 0 && direction === 1) {
        ghostMoveDown(ghost3);
      }
      if (axis === 1 && direction === -1) {
        ghostMoveLeft(ghost3);
      }
      if (axis === 1 && direction === 1) {
        ghostMoveRight(ghost3);
      }
    }
  }, 750);
}


/*
* Function name: moveDirection
* This function will generate a random number to choose which direction to move up, down, left, right
*/
function moveDirection() {
  let min = 0;
  let max = 2;
  let axis = Math.floor(Math.random() * (+max - +min)) + +min;

  let direction =
    Math.floor(Math.random() * (+max - +min)) + +min === 0 ? -1 : 1;

  return { axis, direction };
}

/*
 * Function name: gameTracker
 * The if statement condition -> if pac-man's  next location is a bean
 * 	if condition is satisfied increment player's score by 10
 *	Decrement the total number of beans by one
 * Else if statement condition -> if pac-man's  next location is a power bean
 *	if condition is satisfied increment player's score by 50
 *	Decrement the total number of power beans by one
 * Update player score.
 * Check if the game over condition is satisfied
 */
function gameTracker() {
  console.log("called gameTracker()");
  if (BOARD[pacman.y][pacman.x] === BEAN) {
    score += 10;
    beanCount--;
  } else if (BOARD[pacman.y][pacman.x] === PBEAN) {
    score += 50;
    beanCount--;
  }
  updateLive();
  updateScore();
  if (isGameOver()) {
    document.getElementById("lives").innerHTML = "GAME OVER!";
  }
}

/*
 * Function name: registerEventListener
 *  This function will wait for a key press event.
 *  then it will move pacman in the designated direction if the movement can be made
 *  isGameOver - remove event listener if game is over
 */
function registerEventListener() {
  window.addEventListener("keydown", function(event) {
    switch (event.key) {
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowDown":
        moveDown();
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
    }
   
    if (isGameOver()) {
      window.removeEventListener("keydown", arguments.callee);
    }
  });
}

/*
 * Function name: init
 * This dunction draws the board on the screen and waits for the event listeners.
 * It will also set the game to starting stats (ie lives is three and score at zero)
 *
 */
function init() {
  drawBoard();
  registerEventListener();
  updateLive();
  updateScore();
  moveGhosts();
}

/*
 * Function restart
 * Redraw the board, and reset score and lives to default
 * refreshes the page to start over
 */
function restart() {
  location.reload(); 
}

/*
 * Function name: isGameOver
 * checks if no lives left.
 * checks if all beans are eaten
 */
function isGameOver() {
  return lives <= 0 || beanCount === 0;
}

/*
 * Function name: updateScore
 * This function will take the player's score and display it on the game screen
 */
function updateScore() {
  document.getElementById("score").innerHTML = "SCORE: " + score;
}

/*
 * Function name: updateLive
 * This function will take the amount of lives left by the player and display it on the
 * game screen
 */
function updateLive() {
  document.getElementById("lives").innerHTML = "Lives Left: " + lives;
}


/*
* Function name: drawPic
* This function will do all of the picture printing to screen
*/
function drawPic(x, y, character) {
  const image = new Image();
  image.src = character;
  image.onload = function() {
    context.drawImage(image, x, y, IMG_WIDTH, IMG_HEIGHT);
  };
}

/*
 * Function name: drawBoard
 * This function that draws the board. Follows the switch case and passes in the
 * parameters where x=i, y=j and the assaciated Image for that number.
 *
 */

function drawBoard() {
  for (let i = 0; i < BOARD.length; i++) {
    for (let j = 0; j < BOARD[i].length; j++) {
      switch (BOARD[i][j]) {
        case 0:
          drawPic(j * IMG_WIDTH, i * IMG_HEIGHT, BEAN_IMAGE);
          break;
        case 1:
          drawPic(j * IMG_WIDTH, i * IMG_HEIGHT, WALL_IMAGE);
          break;
        case 2:
          drawPic(j * IMG_WIDTH, i * IMG_HEIGHT, PACMAN_IMAGE);
          break;
        case 3:
          drawPic(j * IMG_WIDTH, i * IMG_HEIGHT, GHOST_IMAGE);
          break;
        case 4:
          drawPic(j * IMG_WIDTH, i * IMG_HEIGHT, POWERBEAN_IMAGE);
          break;
        default:
          console.error("error: unknown number");
      }
    }
  }
  console.log("drawBoard called ");
}

init();
