# Game Initialization
- **Player 1** visits app (session is created for first time visitor)
- **Player 1** and **Player 2** initial state is saved to the database and a unique key is generated for the game
- **Player 1** is then supplied a URL that corresponds to the unique key in the database and is prompted to share the URL with **Player 2**
~~~~
playerOneReady: true,
playerTwoReady: false
~~~~
- **Player 2** connects to the game
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
- Once 17/100 squares are filled with ships, then game is ready to start
