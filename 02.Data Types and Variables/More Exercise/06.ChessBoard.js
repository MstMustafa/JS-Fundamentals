function generateChessboard(n) {
  let chessboardHTML = '<div class="chessboard">\n';

  for (let i = 0; i < n; i++) {
    chessboardHTML += '  <div>\n';

    for (let j = 0; j < n; j++) {
      const isBlack = (i + j) % 2 === 0;
      const squareColor = isBlack ? 'black' : 'white';

      chessboardHTML += `    <span class="${squareColor}"></span>\n`;
    }

    chessboardHTML += '  </div>\n';
  }

  chessboardHTML += '</div>';
  console.log(chessboardHTML);
}
