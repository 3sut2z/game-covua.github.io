// JavaScript để thêm logic
const board = document.getElementById('board');

// Tạo bảng cờ vua
function createChessBoard() {
    for (let row = 8; row >= 1; row--) {
        for (let col = 1; col <= 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.id = `${String.fromCharCode(96 + col)}${row}`;
            if ((row + col) % 2 === 0) {
                square.classList.add('dark');
            }
            board.appendChild(square);
        }
    }
}

// Khởi tạo bảng cờ vua khi trang được tải
createChessBoard();
