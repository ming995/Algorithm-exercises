/**
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

    单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
    同一个单元格内的字母不允许被重复使用。

    board =
    [
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ]

    给定 word = "ABCCED", 返回 true.
    给定 word = "SEE", 返回 true.
    给定 word = "ABCB", 返回 false.

    
    链接：https://leetcode-cn.com/problems/word-search

    使用 DFS 以及回溯算法
 *
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    var r = board.length;
    if (r === 0) {
        return false;
    }
    var c = board[0].length;
    if (c === 0) {
        return false;
    }
    if (r * c < word.length) {
        return false;
    }
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < c; j++) {
            if (findword(i, j, word)) {
                return true;
            }
        }
    }
    return false;

    function findword(row, col, str, pos_str) {
        var str_len = str.length;
        if (str_len === 0) {
            return true;
        }
        if (row >= r || col >= c || row < 0 || col < 0) {
            return false;
        }
        if (board[row][col] !== str.charAt(0)) {
            return false;
        }
        var new_str = str.substring(1);
        var tmp = board[row][col];
        board[row][col] = "0";
        var ans = findword(row + 1, col, new_str) || findword(row, col + 1, new_str) || findword(row - 1, col, new_str) || findword(row, col - 1, new_str);
        board[row][col] = tmp;
        return ans;
    }
};