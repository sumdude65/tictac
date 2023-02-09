# Basic Tic Tac Toe Game
A pretty barebones game of tic tac toe

## Features
Win detection, Draw detection and ability to start a new game

## Challenges of this project
I built this bare bones app to gain understanding of managing the 
state of the game using the useReducer hook from react. This hook
allows me to simulate redux-like state management without redux, by 
having the entire application state managed in a single store.

## highlights of developing this game
1. Wrote the reducer function to handle the state changes of the app
2. Wrote appropriate actions to be dispatched to the reducer function
3. Ensured the lower level components only got stateful data that was useful
to them alone and not other parts of the app.

## Clone this project
After cloning run `npm i` to download the projects dependencies then 
run `npm run start` to start the development server. 