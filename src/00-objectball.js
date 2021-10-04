function gameObject() {
    let someObject = {};
    return someObject = {
        home: {
            teamName: 'Brooklyn Nets',
            color: ['Black', 'White'],
            players: {
                Alan: {
                    Number: '0',
                    Shoe: '16',
                    Points: '22',
                    Rebounds: '12',
                    Assists: '12',
                    Steals: '3',
                    Blocks: '1',
                    SlamDunks:'1',
                },
                Reggie: {
                    Number: '30',
                    Shoe: '14',
                    Points: '12',
                    Rebounds: '12',
                    Assists: '12',
                    Steals: '12',
                    Blocks: '12',
                    SlamDunks:'7',
                },
                Brook: {
                    Number: '11',
                    Shoe: '17',
                    Points: '17',
                    Rebounds: '19',
                    Assists: '10',
                    Steals: '3',
                    Blocks: '1',
                    SlamDunks:'15',
                },
                Mason: {
                    Number: '1',
                    Shoe: '19',
                    Points: '26',
                    Rebounds: '12',
                    Assists: '6',
                    Steals: '3',
                    Blocks: '8',
                    SlamDunks:'5',
                },
                Jason: {
                    Number: '31',
                    Shoe: '15',
                    Points: '19',
                    Rebounds: '2',
                    Assists: '2',
                    Steals: '4',
                    Blocks: '11',
                    SlamDunks:'1',
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            color: ['Turquoise', 'Purple'],
            players: {
                Jeff: {
                    Number: '4',
                    Shoe: '18',
                    Points: '10',
                    Rebounds: '1',
                    Assists: '1',
                    Steals: '2',
                    Blocks: '7',
                    SlamDunks:'2',
                },
                Bismak: {
                    Number: '0',
                    Shoe: '16',
                    Points: '12',
                    Rebounds: '4',
                    Assists: '7',
                    Steals: '7',
                    Blocks: '15',
                    SlamDunks:'10',
                },
                DeSagna: {
                    Number: '2',
                    Shoe: '14',
                    Points: '24',
                    Rebounds: '12',
                    Assists: '12',
                    Steals: '4',
                    Blocks: '5',
                    SlamDunks:'5',
                },
                Ben: {
                    Number: '8',
                    Shoe: '15',
                    Points: '33',
                    Rebounds: '3',
                    Assists: '2',
                    Steals: '1',
                    Blocks: '1',
                    SlamDunks:'0',
                },
                Brendan: {
                    Number: '33',
                    Shoe: '15',
                    Points: '6',
                    Rebounds: '12',
                    Assists: '12',
                    Steals: '22',
                    Blocks: '5',
                    SlamDunks: '12',
                }
            }
        }
    }
}
console.log(gameObject());

function numPointScored(name) {
    let gameObj = gameObject();
    for (let homeOrAway in gameObj) {
        let teamObj = gameObj[homeOrAway];
        let playerListObj = teamObj.players;
        for (let names in playerListObj) {
            if (names === name) {
                let playerStatObj = playerListObj[names];
                return playerStatObj.Points;
            }
        }
    }
}

function shoeSize(name) {
    let gameObj = gameObject();
    for (let homeOrAway in gameObj) {
        let teamObj = gameObj[homeOrAway];
        let playerListObj = teamObj.players;
        for (let names in playerListObj) {
            if (names === name) {
                let playerStatObj = playerListObj[names];
                return playerStatObj.Shoe;
            }
        }
    }
}

function teamColors(someTeamName) {
    let gameObj = gameObject();
    for (let homeOrAway in gameObj) {
        let teamObj = gameObj[homeOrAway];
        if (teamObj.teamName === someTeamName) {
            return teamObj.color;
        }
    }
}

function teamNames() {
    let gameObj = gameObject();
    const arrayOfTeamNames = [];
    for (let homeOrAway in gameObj) {
        let teamObj = gameObj[homeOrAway];
        arrayOfTeamNames.push(teamObj.teamName);
    }
    return arrayOfTeamNames;
}

function playerNumbers(someTeamName) {
    let gameObj = gameObject();
    const arrayOfPlayerNumbers = [];
    for (let homeOrAway in gameObj) {
        let teamObj = gameObj[homeOrAway];
        if (teamObj.teamName === someTeamName) {
            let playerListObj = teamObj.players;
            for (let names in playerListObj) {
                let playerStatObj = playerListObj[names];
                arrayOfPlayerNumbers.push(playerStatObj.Number);
            }
        }
    }
    return arrayOfPlayerNumbers;
}

function playerStats(name) {
    let gameObj = gameObject();
    for (let homeOrAway in gameObj) {
        let teamObj = gameObj[homeOrAway];
        let playerListObj = teamObj.players;
        for (let names in playerListObj) {
            if (names === name) {
                let playerStatObj = playerListObj[names];
                return playerStatObj;
            }
        }
    }
}

function bigShoeRebounds() {
    let gameObj = gameObject();
    for (let homeOrAway in gameObj) {
        let teamObj = gameObj[homeOrAway];
        let playerListObj = teamObj.players;
        for (let names in playerListObj) {
            let playerStatObj = playerListObj[names];
            if (playerStatObj.Shoe == getBiggestShoeSize()) {
                return playerStatObj.Rebounds;
            }
        }
    }
}

function getBiggestShoeSize() {
    let gameObj = gameObject();
    const arrayOfShoeSizes = [];
    for (let homeOrAway in gameObj) {
        let teamObj = gameObj[homeOrAway];
        let playerListObj = teamObj.players;
        for (let names in playerListObj) {
            let playerStatObj = playerListObj[names];
            arrayOfShoeSizes.push(playerStatObj.Shoe);
        }
    }
    const biggestShoeSize = arrayOfShoeSizes.reduce(function(a, b) {return Math.max(a, b)}, 0);
    return biggestShoeSize;
}