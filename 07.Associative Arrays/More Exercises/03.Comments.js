function manageComments(commands) {
  const users = new Set();
  const articles = new Set();
  const comments = {};

  commands.forEach(command => {
    if (command.startsWith('user ')) {
      users.add(command.slice(5));
    } else if (command.startsWith('article ')) {
      const articleName = command.slice(8);
      articles.add(articleName);
      comments[articleName] = [];
    } else {
      const [user, rest] = command.split(' posts on ');
      const [articleName, commentInfo] = rest.split(': ');
      const [title, content] = commentInfo.split(', ');

      if (users.has(user) && articles.has(articleName)) {
        if (!comments[articleName]) comments[articleName] = [];
        comments[articleName].push({ user, title, content });
      }
    }
  });

  const sortedArticleNames = Object.keys(comments).sort((a, b) => comments[b].length - comments[a].length);

  let output = '';
  sortedArticleNames.forEach(article => {
    output += `Comments on ${article}\n`;
    comments[article].sort((a, b) => a.user.localeCompare(b.user)).forEach(comment => {
      output += `--- From user ${comment.user}: ${comment.title} - ${comment.content}\n`;
    });
  });

  return output.trim();
}
