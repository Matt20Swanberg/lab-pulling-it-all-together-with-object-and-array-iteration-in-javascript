
/*
  Basketball Game Data + Helper Functions
  ---------------------------------------
  This file contains functions that iterate through a nested game object
  to retrieve various statistics about teams and players.

  Structure Overview:
  gameObject()
    ├── home
    │     ├── teamName
    │     ├── colors
    │     └── players
    │           └── "Player Name": { stats }
    └── away
          ├── teamName
          ├── colors
          └── players
                └── "Player Name": { stats }
*/

function gameObject() {
    // Returns the entire game dataset
    // Contains two teams: home and away
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
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
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
                    slamDunks: 2
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

/*
  numPointsScored(playerName)
  ---------------------------
  Input: player name (string)
  Output: number of points scored by that player
*/
function numPointsScored(playerName) {
    const game = gameObject();

    for (const teamKey in game) {
        const players = game[teamKey].players;

        for (const name in players) {
            if (name === playerName) {
                return players[name].points;
            }
        }
    }
}

/*
  shoeSize(playerName)
  --------------------
  Returns the shoe size for a given player
*/
function shoeSize(playerName) {
    const game = gameObject();

    for (const teamKey in game) {
        const players = game[teamKey].players;

        for (const name in players) {
            if (name === playerName) {
                return players[name].shoe;
            }
        }
    }
}

/*
  teamColors(teamName)
  --------------------
  Returns an array containing the colors of the specified team
*/
function teamColors(teamName) {
    const game = gameObject();

    for (const teamKey in game) {
        const team = game[teamKey];

        if (team.teamName === teamName) {
            return team.colors;
        }
    }
}

/*
  teamNames()
  -----------
  Returns an array of both team names
*/
function teamNames() {
    const game = gameObject();
    const names = [];

    for (const teamKey in game) {
        names.push(game[teamKey].teamName);
    }

    return names;
}

/*
  playerNumbers(teamName)
  -----------------------
  Returns an array of jersey numbers for players on a given team
*/
function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];

    for (const teamKey in game) {
        const team = game[teamKey];

        if (team.teamName === teamName) {
            const players = team.players;

            for (const playerName in players) {
                numbers.push(players[playerName].number);
            }
        }
    }

    return numbers;
}

/*
  playerStats(playerName)
  -----------------------
  Returns the full statistics object for a given player
*/
function playerStats(playerName) {
    const game = gameObject();

    for (const teamKey in game) {
        const players = game[teamKey].players;

        for (const name in players) {
            if (name === playerName) {
                return players[name];
            }
        }
    }
}

/*
  bigShoeRebounds()
  -----------------
  Finds the player with the largest shoe size
  and returns that player's rebounds
*/
function bigShoeRebounds() {
    const game = gameObject();

    let largestShoe = 0;
    let rebounds = 0;

    for (const teamKey in game) {
        const players = game[teamKey].players;

        for (const playerName in players) {
            const player = players[playerName];

            if (player.shoe > largestShoe) {
                largestShoe = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }

    return rebounds;
}

/*
  mostPointsScored()
  ------------------
  Determines which player scored the most points
*/
function mostPointsScored() {
    const game = gameObject();

    let mostPoints = 0;
    let highestScorer = "";

    for (const teamKey in game) {
        const players = game[teamKey].players;

        for (const playerName in players) {
            const player = players[playerName];

            if (player.points > mostPoints) {
                mostPoints = player.points;
                highestScorer = playerName;
            }
        }
    }

    return highestScorer;
}

/*
  winningTeam()
  -------------
  Determines which team scored the most total points
*/
function winningTeam() {
    const game = gameObject();

    let homePoints = 0;
    let awayPoints = 0;

    for (const playerName in game.home.players) {
        homePoints += game.home.players[playerName].points;
    }

    for (const playerName in game.away.players) {
        awayPoints += game.away.players[playerName].points;
    }

    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else {
        return game.away.teamName;
    }
}

/*
  playerWithLongestName()
  -----------------------
  Returns the player whose name has the most characters
*/
function playerWithLongestName() {
    const game = gameObject();

    let longestName = "";

    for (const teamKey in game) {
        const players = game[teamKey].players;

        for (const playerName in players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }

    return longestName;
}

/*
  doesLongNameStealATon()
  -----------------------
  Checks if the player with the longest name also has the most steals
  Returns true or false
*/
function doesLongNameStealATon() {
    const game = gameObject();

    const longestName = playerWithLongestName();

    let mostSteals = 0;
    let longestNameSteals = 0;

    for (const teamKey in game) {
        const players = game[teamKey].players;

        for (const playerName in players) {
            const player = players[playerName];

            if (player.steals > mostSteals) {
                mostSteals = player.steals;
            }

            if (playerName === longestName) {
                longestNameSteals = player.steals;
            }
        }
    }

    return longestNameSteals === mostSteals;
}
