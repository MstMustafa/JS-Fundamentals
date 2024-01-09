function tseamAccount(input) {
    let account = input.shift().split(' ');
  
    for (let line of input) {
      if (line === 'Play!') {
        break;
      }
  
      let [command, game] = line.split(' ');
  
      switch (command) {
        case 'Install':
          if (!account.includes(game)) {
            account.push(game);
          }
          break;
        case 'Uninstall':
          if (account.includes(game)) {
            let index = account.indexOf(game);
            account.splice(index, 1);
          }
          break;
        case 'Update':
          if (account.includes(game)) {
            let index = account.indexOf(game);
            account.splice(index, 1);
            account.push(game);
          }
          break;
        case 'Expansion':
          let [gameName, expansion] = game.split('-');
          if (account.includes(gameName)) {
            let index = account.indexOf(gameName);
            account.splice(index + 1, 0, `${gameName}:${expansion}`);
          }
          break;
      }
    }
  
    console.log(account.join(' '));
  }
