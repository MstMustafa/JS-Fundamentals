function generateTriples(n) {
  n = Number(n);

   for (let i = 97; i < 97 + n; i++) {
    for (let j = 97; j < 97 + n; j++) {
      for (let k = 97; k < 97 + n; k++) {
        const triple = String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k);
        console.log(triple);
      }
    }
  }
}
