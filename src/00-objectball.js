function gameObject(){
    return {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
           "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
           },
           "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
           },
           "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
           },
           "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
           },
           "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
           },
        }
    },
    
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
               },
               "Bismack Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
               },
               "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
               },
               "Ben Gordan": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
               },
               "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
               },
        }
    }
}
}

function homeTeamName(){
    let object = gameObject();
    return object["home"]["teamName"];
}

function numPointsScored(playerName){
    let game = gameObject();

    for (let player in game["home"]["players"]){
        if (player === playerName){
            return game["home"]["players"][player]["points"];
        }
    }

    for (let player in game["away"]["players"]){
        if (player === playerName){
            return game["away"]["players"][player]["points"];
        }
    }
}

function shoeSize(playerShoe){
    let sneaker = gameObject();

    for (let shoeSize in sneaker["home"]["players"]){
        if (shoeSize === playerShoe){
            return sneaker["home"]["players"][shoeSize]["shoe"];
        }
    }

    for (let shoeSize in sneaker["away"]["players"]){
        if (shoeSize === playerShoe){
            return sneaker["away"]["players"][shoeSize]["shoe"];
        }
    }
}

function teamColors(teamNames){
    let game = gameObject();

    for (teamKey in game){
        let team = game[teamKey];
        if (team["teamName"] === teamNames){
            return team["colors"];
        }
    }
    }

function teamName(){
    let testTeam = gameObject();

    if ("away" in testTeam) {
        return testTeam["away"]["teamName"];
      } else if ("home" in testTeam) {
        return teamTeam["home"]["teamName"];
      }
    
}

function playerNumbers(playerNumber){
    let game = gameObject();

    for (teamKey in game){
        let players = game[teamKey]["players"];
        if (playerNumber in players){
            return players[playerNumber]["number"];
        }
    }
}

function playerStats(playerName){
    let game = gameObject();

    for (teamKey in game){
        let players = game[teamKey]["players"];
        if (playerName in players){
            return players[playerName];
        }
    }
}

function bigShoeRebounds(){
    let game = gameObject();
    let biggestShoe = Number.MIN_VALUE
    let playerLargestShoe;

    for (let player in game["home"]["players"]){
        if (game["home"]["players"][player]["shoe"] > biggestShoe){
        biggestShoe = game["home"]["players"][player];
        playerLargestShoe = game["home"]["players"][player];
        }
    } 
    for (let player in game["away"]["players"]){
        if (game["away"]["players"][player]["shoe"] > biggestShoe){
        biggestShoe = game["away"]["players"][player];
        playerLargestShoe = game["away"]["players"][player];
        }
    } 
    return playerLargestShoe["rebounds"];
}

function mostPointsScored(){
    let game = gameObject();
    let bigNight = Number.MIN_VALUE
    let heatCheck;

    for (let player in game["home"]["players"]){
        if (game["home"]["players"][player]["points"] > bigNight){
        bigNight = game["home"]["players"][player]["points"];
        heatCheck = game["home"]["players"][player];
        }
    } 
    for (let player in game["away"]["players"]){
        if (game["away"]["players"][player]["points"] > bigNight){
        bigNight = game["away"]["players"][player]["points"];
        heatCheck = game["away"]["players"][player];
        }
    } 

    return heatCheck["points"];
}

function winningTeam() {
    let game = gameObject();
    let homeTotal = calculateTotalPoints(game["home"]["players"]);
    let awayTotal = calculateTotalPoints(game["away"]["players"]);
  
    if (homeTotal > awayTotal) {
      return game["home"]["teamName"];
    } else if (awayTotal > homeTotal) {
      return game["away"]["teamName"];
    };
  }
  
  function calculateTotalPoints(players) {
    let totalPoints = 0;
  
    for (let playerName in players) {
      totalPoints += players[playerName]["points"];
    }
  
    return totalPoints;
  }