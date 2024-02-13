function processSongs(inputArray) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];

  for (let i = 1; i < inputArray.length - 1; i++) {
    const [typeList, name, time] = inputArray[i].split('_');
    songs.push(new Song(typeList, name, time));
  }

  const filterType = inputArray[inputArray.length - 1]; // Extract the filter type (last element)

  if (filterType === "all") {
    songs.forEach(song => console.log(song.name));
  } else {
    songs.filter(song => song.typeList === filterType).forEach(song => console.log(song.name));
  }
}
