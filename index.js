function gameObject() {
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
                "Reggie Evens": {
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
            },
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
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// This function takes a player’s name and returns their points scored
function numPointsScored(playerName) {
    const game = gameObject();

    // Loop through each team (home and away)
    for (const teamKey in game) {
        // Ensure the value is a team object
        if (typeof game[teamKey] === "object") {

            const team = game[teamKey];
            const players = team.players;

            // Loop through all players on that team
            for (const name in players) {
                // If the player name matches, return their points
                if (name === playerName) {
                    return players[name].points;
                }
            }

        }
    }
}

// This function takes a player's name and returns their shoe size
function shoeSize(playerName) {
    const game = gameObject();

    // Loop through each team (home and away)
    for (const teamKey in game) {
        // Ensure the value is a team object
        if (typeof game[teamKey] === "object") {

            const team = game[teamKey];
            const players = team.players;

            // Loop through all players on that team
            for (const name in players) {
                // If player matches, return their shoe size
                if (name === playerName) {
                    return players[name].shoe;
                }
            }

        }
    }
}

// This function takes a team name as input and returns an array of the team’s colors
function teamColors(teamName) {
    const game = gameObject();

    // Loop through each team (home and away)
    for (const teamKey in game) {
        if (typeof game[teamKey] === "object") {

            const team = game[teamKey];

            // Check if the team name matches, return team colors
            if (team.teamName === teamName) {
                return team.colors;
            }
        }
    }
}
// This function returns an array of both team names
function teamNames() {
    const game = gameObject();
    const names = [];

    // Collect each team name
    for (const teamKey in game) {
        const team = game[teamKey];

        // push team names to names array
        names.push(team.teamName);
    }
    // return team names filled array
    return names;
}

// This function takes a team name as input and returns an array of all players’ jersey numbers on that team.
function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];

    // Loop through each team (home and away)
    for (const teamKey in game) {
        if (typeof game[teamKey] === "object") {

            const team = game[teamKey];
            const subTeam = team.name;

            // Check to make sure this is the requested team
            if (team.teamName === teamName) {
                const players = team.players;

                // Collect jersey numbers
                for (const playerName in players) {
                    numbers.push(players[playerName].number);
                }
            }
        }
    }
    // Return jersey numbers filled array
    return numbers;
};

// This function takes a player’s name as input and returns an object with all stats for that player
function playerStats(playerName) {
    const game = gameObject();

    // Loop through each team (home and away)
    for (const teamKey in game) {
        if (typeof game[teamKey] === "object") {

            const team = game[teamKey];
            const players = team.players;

            // Return the entire player's object stats
            for (const name in players) {
                if (name === playerName) {
                    return players[name];
                }
            }

        }
    }
}

// This function returns the number of rebounds for the player with the largest shoe size.
function bigShoeRebounds() {
    const game = gameObject();
    let largestShoe = 0;
    let rebounds = 0;

    // Loop through each team (home and away)
    for (const teamKey in game) {
        const team = game[teamKey];
        const players = team.players;

        // Loop through all players on that team
        for (const playerName in players) {
            const player = players[playerName];

            // Track the player with the largest shoe size
            if (player.shoe > largestShoe) {
                largestShoe = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }
    // Return number of rebounds for the player with the biggest shoe size
    return rebounds;
}

// This function returns the name of the player with the highest scored points
function mostPointsScored() {
    const game = gameObject();
    let mostScored = 0;
    let highestScorer = "";

    // Loop through each team (home and away)
    for (const teamKey in game) {
        const team = game[teamKey];
        const players = team.players;

        // Loop through all players on that team
        for (const playerName in players) {
            const player = players[playerName];

            // Update highest scorer if points are greater
            if (player.points > mostScored) {
                mostScored = player.points;
                highestScorer = playerName;
            }
        }
    }
    // Return name of player with the most scored points
    return highestScorer;
}

// This function identifies which team has the most total points
function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    // Loop through each team (home and away)
    for (const teamKey in game) {
        if (typeof game[teamKey] === "object") {

            const team = game[teamKey];
            const players = team.players;
            let teamTotal = 0;

            // Add up points for all players on the team
            for (const playerName in players) {
                teamTotal += players[playerName].points;
            }

            // Assign totals to the correct team
            if (teamKey == "home") {
                homePoints = teamTotal;
            }
            else if (teamKey == "away") {
                awayPoints = teamTotal;
            }
        }
    }

    // Compare team totals and return which is higher
    if (homePoints > awayPoints) {
        return game.home.teamName
    } else {
        return game.away.teamName
    }
}

// This function identifies the player with the longest Name
function playerWithLongestName() {
    const game = gameObject();
    let longestPlayerName = "";

    // Loop through both teams
    for (const teamKey in game) {
        const team = game[teamKey];
        const players = team.players;

        // Check each player name
        for (const playerName in players) {
            // Update if this name is longer than the current longest
            if (playerName.length > longestPlayerName.length) {
                longestPlayerName = playerName;
            }
        }
    }
    return longestPlayerName;
}

// This function returns [true] if the player with the longest name has the most steals
function doesLongNameStealATon() {
    const game = gameObject();
    let longestPlayerName = "";

    let mostSteals = 0;
    let longestNameSteals = 0;

    // Loop through all teams and players
    for (const teamKey in game) {
        const team = game[teamKey];
        const players = team.players;

        for (const playerName in players) {
            const player = players[playerName];

            // Track the highest steals in the game
            if (player.steals > mostSteals) {
                mostSteals = player.steals;
            }

            // If this player has the longest name, track their steals
            if (playerName === longestPlayerName) {
                longestNameSteals = player.steals;
            }
        }
    }
    // Return true if they match
    return longestNameSteals === mostSteals;
}