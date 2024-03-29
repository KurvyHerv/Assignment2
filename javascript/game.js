var tiles = ["blue", "orange", "grey", "yellow", "red", "purple"];
var board = [];
var rows = 9;
var columns = 9;
var score = 0;

var currTile;
var otherTile;

function resetScore(){
    score = 0;
}
setTimeout(resetScore, 3000);

window.onload = function() {
    startGame();

    //1/10th of a second
    window.setInterval(function(){
        crushTile();
        slideTile();
        generateTile();
    }, 100);
}

function randomtile() {
    return tiles[Math.floor(Math.random() * tiles.length)]; //0 - 5.99
}

function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./images/game/" + randomtile() + ".png";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on a tile, initialize drag process
            tile.addEventListener("dragover", dragOver);  //clicking on tile, moving mouse to drag the tile
            tile.addEventListener("dragenter", dragEnter); //dragging tile onto another tile
            tile.addEventListener("drop", dragDrop); //dropping a tile over another tile
            tile.addEventListener("dragend", dragEnd); //after drag process completed, swap tiles

            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }

    console.log(board);
}

function dragStart() {
    //this refers to tile that was clicked on for dragging
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}


function dragDrop() {
    //this refers to the target tile that was dropped on
    otherTile = this;
}

function dragEnd() {

    if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
        return;
    }

    let currCoords = currTile.id.split("-"); // id="0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = c2 == c-1 && r == r2;
    let moveRight = c2 == c+1 && r == r2;

    let moveUp = r2 == r-1 && c == c2;
    let moveDown = r2 == r+1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;

        let validMove = checkValid();
        if (!validMove) {
            let currImg = currTile.src;
            let otherImg = otherTile.src;
            currTile.src = otherImg;
            otherTile.src = currImg;    
        }
    }
}

function crushTile() {
    crushFive();
    crushFour();
    crushThree();
    $("#score").text(score);
    $("#finalScore").text(score);
    localStorage.setItem("score",score);
}

function crushThree() {
    //check rows
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-2; c++) {
            let tile1 = board[r][c];
            let tile2 = board[r][c+1];
            let tile3 = board[r][c+2];
            if (tile1.src == tile2.src && tile2.src == tile3.src && !tile1.src.includes("blank")) {
                tile1.src = "./images/game/blank.png";
                tile2.src = "./images/game/blank.png";
                tile3.src = "./images/game/blank.png";
                score += 10;
            }
        }
    }

    //check columns
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-2; r++) {
            let tile1 = board[r][c];
            let tile2 = board[r+1][c];
            let tile3 = board[r+2][c];
            if (tile1.src == tile2.src && tile2.src == tile3.src && !tile1.src.includes("blank")) {
                tile1.src = "./images/game/blank.png";
                tile2.src = "./images/game/blank.png";
                tile3.src = "./images/game/blank.png";
                score += 10;
            }
        }
    }
}

function crushFour() {
    //check rows
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-3; c++) {
            let tile1 = board[r][c];
            let tile2 = board[r][c+1];
            let tile3 = board[r][c+2];
            let tile4 = board[r][c+3];
            if (tile1.src == tile2.src && tile2.src == tile3.src && tile3.src == tile4.src && !tile1.src.includes("blank")) {
                tile1.src = "./images/game/blank.png";
                tile2.src = "./images/game/blank.png";
                tile3.src = "./images/game/blank.png";
                tile4.src = "./images/game/blank.png";
                score += 50;
            }
        }
    }

    //check columns
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-3; r++) {
            let tile1 = board[r][c];
            let tile2 = board[r+1][c];
            let tile3 = board[r+2][c];
            let tile4 = board[r+3][c];
            if (tile1.src == tile2.src && tile2.src == tile3.src && tile3.src == tile4.src && !tile1.src.includes("blank")) {
                tile1.src = "./images/game/blank.png";
                tile2.src = "./images/game/blank.png";
                tile3.src = "./images/game/blank.png";
                tile4.src = "./images/game/blank.png";
                score += 50;
            }
        }
    }
}

function crushFive() {
    //check rows
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-4; c++) {
            let tile1 = board[r][c];
            let tile2 = board[r][c+1];
            let tile3 = board[r][c+2];
            let tile4 = board[r][c+3];
            let tile5 = board[r][c+4];
            if (tile1.src == tile2.src && tile2.src == tile3.src && tile3.src == tile4.src && tile4.src == tile5.src && !tile1.src.includes("blank")) {
                tile1.src = "./images/game/blank.png";
                tile2.src = "./images/game/blank.png";
                tile3.src = "./images/game/blank.png";
                tile4.src = "./images/game/blank.png";
                tile5.src = "./images/game/blank.png";
                score += 100;
            }
        }
    }

    //check columns
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-4; r++) {
            let tile1 = board[r][c];
            let tile2 = board[r+1][c];
            let tile3 = board[r+2][c];
            let tile4 = board[r+3][c];
            let tile5 = board[r+4][c];
            if (tile1.src == tile2.src && tile2.src == tile3.src && tile3.src == tile4.src && tile4.src == tile5.src && !tile1.src.includes("blank")) {
                tile1.src = "./images/game/blank.png";
                tile2.src = "./images/game/blank.png";
                tile3.src = "./images/game/blank.png";
                tile4.src = "./images/game/blank.png";
                tile5.src = "./images/game/blank.png";
                score += 100;
            }
        }
    }
}

function checkValid() {
    //check rows
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-2; c++) {
            let tile1 = board[r][c];
            let tile2 = board[r][c+1];
            let tile3 = board[r][c+2];
            if (tile1.src == tile2.src && tile2.src == tile3.src && !tile1.src.includes("blank")) {
                return true;
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-3; c++) {
            let tile1 = board[r][c];
            let tile2 = board[r][c+1];
            let tile3 = board[r][c+2];     
            let tile4 = board[r][c+3];
            if (tile1.src == tile2.src && tile2.src == tile3.src && tile3.src == tile4.src && !tile1.src.includes("blank")) {
                return true;
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-4; c++) {
            let tile1 = board[r][c];
            let tile2 = board[r][c+1];
            let tile3 = board[r][c+2];     
            let tile4 = board[r][c+3];
            let tile5 = board[r][c+4];
            if (tile1.src == tile2.src && tile2.src == tile3.src && tile3.src == tile4.src && tile4.src == tile5.src && !tile1.src.includes("blank")) {
                return true;
            }
        }
    }

    //check columns
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-2; r++) {
            let tile1 = board[r][c];
            let tile2 = board[r+1][c];
            let tile3 = board[r+2][c];
            if (tile1.src == tile2.src && tile2.src == tile3.src && !tile1.src.includes("blank")) {
                return true;
            }
        }
    }

    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-3; r++) {
            let tile1 = board[r][c];
            let tile2 = board[r+1][c];
            let tile3 = board[r+2][c];
            let tile4 = board[r+3][c];
            if (tile1.src == tile2.src && tile2.src == tile3.src && tile3.src == tile4.src && !tile1.src.includes("blank")) {
                return true;
            }
        }
    }

    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-34; r++) {
            let tile1 = board[r][c];
            let tile2 = board[r+1][c];
            let tile3 = board[r+2][c];
            let tile4 = board[r+3][c];
            let tile5 = board[r+4][c];
            if (tile1.src == tile2.src && tile2.src == tile3.src && tile3.src == tile4.src && tile4.src == tile5.src && !tile1.src.includes("blank")) {
                return true;
            }
        }
    }

    return false;
}


function slideTile() {
    for (let c = 0; c < columns; c++) {
        let ind = rows - 1;
        for (let r = columns-1; r >= 0; r--) {
            if (!board[r][c].src.includes("blank")) {
                board[ind][c].src = board[r][c].src;
                ind -= 1;
            }
        }

        for (let r = ind; r >= 0; r--) {
            board[r][c].src = "./images/game/blank.png";
        }
    }
}

function generateTile() {
    for (let c = 0; c < columns;  c++) {
        if (board[0][c].src.includes("blank")) {
            board[0][c].src = "./images/game/" + randomtile() + ".png";
        }
    }
}