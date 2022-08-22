/**
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once in a word.
 * 
 * Example:
 *  Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
 *  Output: ["eat","oath"]
 */

class TrieNode {
    constructor(children = {}, isTerminal = false) {
        this.children = children;
        this.isTerminal = isTerminal;
    }

    addWord(word) {
        let current = this;
    
        for (const letter of word) {
            if (!(letter in current.children)) {
                current.children[letter] = new TrieNode();
            }

            current = current.children[letter];
        }
    
        current.isTerminal = true;
    }
}

function isInvalid(board, visited, row, col, node) {
    return (
        row < 0
        || col < 0
        || row === board.length
        || col === board[0].length
        || visited.has(JSON.stringify([row, col]))
        || !(board[row][col] in node.children)
    );
}

function dfs(board, result, visited, row, col, node, word) {
    if (isInvalid(board, visited, row, col, node)) return;

    visited.add(JSON.stringify([row, col]));
    node = node.children[board[row][col]];
    word += board[row][col];

    if (node.isTerminal) result.add(word);

    dfs(board, result, visited, row + 1, col, node, word);
    dfs(board, result, visited, row - 1, col, node, word);
    dfs(board, result, visited, row, col + 1, node, word);
    dfs(board, result, visited, row, col - 1, node, word);

    visited.delete(JSON.stringify([row, col]));
}

function findWords(board, words) {
    const root = new TrieNode();

    for (const word of words) root.addWord(word);

    const result = new Set();
    const visited = new Set();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            dfs(board, result, visited, i, j, root, '');
        }
    }

    return [...result];
}

/* Test Cases */
const BOARD_1 = {
    BOARD: [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"],["l", "l", "l", "l"]],
    WORDS: ["oath","pea","eat","rain"],
    OUTPUT: ["oath","eat"],
};

const BOARD_2 = {
    BOARD: [["a","b"],["c","d"]],
    WORDS: ["abcb"],
    OUTPUT: [],
};

console.log(findWords(BOARD_1.BOARD, BOARD_1.WORDS), 'expects', BOARD_1.OUTPUT);
console.log(findWords(BOARD_2.BOARD, BOARD_2.WORDS), 'expects', BOARD_2.OUTPUT);
