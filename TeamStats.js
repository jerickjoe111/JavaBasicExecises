/*
We want to create, retrieve, and add information about your 
favorite sports team. Basketball, soccer, tennis, or water 
polo, you pick it. It’s your job to create data using the 
JavaScript data structures at your disposal: arrays and objects.

After we create these data structures in this project, feel 
free to challenge yourself to gain insights from them. For 
example, you might want to get the total number of games your
 team has played, or the average score of all of their games.

 */

 const team = {
    _players: [ {
      _firstname: 'John',
      _lastName: 'Doe',
      _age: 21
    }, {
      _firstname: 'Lee',
      _lastName: 'Liu',
      _age: 24,
    }, {
      _firstname: 'James',
      _lastName: 'Jons',
      _age: 18,
    }],
    _games: [ {
      _opponent: 'Chealse',
      _teamPoints: 3,
      _opponentPoints: 0,
    }, {
      _opponent: 'Man City',
      _teamPoints: 0,
      _opponentPoints: 3,
    }, {
      _opponent: 'Ansenal',
      _teamPoints: 3,
      _opponentPoints: 0,
    }],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstname, newLastName, newAge) {
      let newPlayer = {
        _firstname: newFirstname,
        _lastName: newLastName,
        _age: newAge,
      }
      this._players.push(newPlayer);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let newGame = {
        _opponent: newOpponent,
        _teamPoints: newTeamPoints,
        _opponentPoints: newOpponentPoints,
      }
      this._games.push(newGame);
    },
  
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('New Castle', 3, 0);
  console.log(team.players);
  console.log(team.games);