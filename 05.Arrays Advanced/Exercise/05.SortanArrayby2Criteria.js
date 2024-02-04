function sortStrings(arr) {
  arr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.localeCompare(b, 'en', { sensitivity: 'base' });
  });

  arr.forEach(str => console.log(str));
}
