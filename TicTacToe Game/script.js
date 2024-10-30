const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Handle cell click
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.getAttribute('data-index');
        
        if (!board[index] && gameActive) {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            if (checkWin()) {
                gameActive = false;
                message.textContent = `${currentPlayer} wins!`;
            } else if (board.every(cell => cell)) {
                gameActive = false;
                message.textContent = `It's a draw!`;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                message.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    });
});

// Check for a win
function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

// Reset game
resetButton.addEventListener('click', () => {
    board = Array(9).fill(null);
    gameActive = true;
    currentPlayer = 'X';
    message.textContent = `Player X's turn`;
    cells.forEach(cell => (cell.textContent = ''));
});
