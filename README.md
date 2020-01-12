[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Battleship
![screenshot](./img/bs-set.jpg)
React application utilizing Redux.

# Start Game
- If you would like to have this locally, go ahead and fork or clone our repo! Once you have it downloaded, run the next 2 commands on your command line!
- `npm install`
- `npm start`

# Technologies
- Firebase Realtime Database
- React/Redux
- Redux-Sagas
- Express
- Socket.io

# Action Items
- Move player turn indicator to the middle of the board for better visibility
- Make sure reactbattleship.com domain name works
- Add sounds for hits and misses
- Message stating which type of ship was sunk
- Update the title tag to notify when it is your turn
- Make website mobile friendly

## Team Members

- [Jerome Dela Cruz](https://github.com/jjdelacruz1)
- [Alvin Ng](https://github.com/ngalvin93)
- [Andy Nguyen](https://github.com/apnguyen11)
- [Sue Park](https://github.com/suepark09)


# Game Initialization
- **Player 1** visits app (OPTIONAL: session is created for first time visitor)
- **Player 1** and **Player 2** initial state is saved to the database and a unique key is generated for the game
- **Player 1** is then supplied a URL that corresponds to the unique key in the database and is prompted to share the URL with **Player 2**
~~~~
playerOneReady: true,
playerTwoReady: false
~~~~
- **Player 1** is shown a waiting screen and waits until **Player 2** connects
- **Player 2** connects to the game, **Player 1** recieves notification that opponent has connected
~~~~
playerOneReady: true,
playerTwoReady: true
~~~~
- **Player 1** and **Player 2** is connected and ready
- **Player 1** and **Player 2** is prompted to place their ships on the board
- **GAME CANNOT START UNTIL BOTH PLAYERS HAS SET THEIR SHIPS**
- As **Player 1** and **Player 2** set their ships, actions are set to update the database with where they placed their ships
~~~~
key: '0A',
ship: true,
color: false
~~~~
- Once each player fills 17/100 squares with ships, then game is ready to start
- At this point, the state saved on the database should look something like this:
~~~~
key: 'OA',
ship: true || false,
color: false
~~~~
PLAYER ONE
state.active
false = has not clicked a ship
true = clicked a ship to place

state.ship
updates with the selected ship to place

Once player one places their last ship
state.player1Ready = true
state.active = false


PLAYER TWO
Once P2 sets last ship
state.player2Ready = true
state.active2 = false
state.isPlaying = true
![screenshot](./img/bs-progress.jpg)

Special thanks to @amangona
