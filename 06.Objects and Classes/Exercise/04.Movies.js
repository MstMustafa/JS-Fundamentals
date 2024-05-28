function processMovieCommands(commands) {
  const movies = [];

  commands.forEach(command => {
    if (command.startsWith('addMovie ')) {
      const name = command.substring('addMovie '.length);
      movies.push({ name });
    } else if (command.includes(' directedBy ')) {
      const [name, director] = command.split(' directedBy ');
      const movie = movies.find(movie => movie.name === name);
      if (movie) movie.director = director;
    } else if (command.includes(' onDate ')) {
      const [name, date] = command.split(' onDate ');
      const movie = movies.find(movie => movie.name === name);
      if (movie) movie.date = date;
    }
  });

  movies.forEach(movie => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}
