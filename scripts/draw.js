const gameBoard = document.getElementById('gameBoard');
const ctx = gameBoard.getContext('2d');

const Draw = (function (ctx) {
    function clearGameBoard() {
        //TODO clear
    }

    function drawBorder(){
        ctx.strokeRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight)
    }


    return {
        clearGameBoard: clearGameBoard,
        drawBorder: drawBorder
    }
})(ctx);
