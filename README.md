# Scoreboard
Scoreboard app allows you to manage ongoing matches and keep track of scores.

## Features
- Display all matches
- Display a list of ongoing matches
- Update scores for home and away teams
- End matches and display a summary

## Tech Stack

The Scoreboard is built using the following technologies:

- Vite: A fast build tool for modern web applications.
- React: A JavaScript library for building user interfaces.
- TypeScript: A statically typed superset of JavaScript that enhances development experience.
- Sass: A CSS preprocessor that enables writing more maintainable and modular styles.
- Redux Toolkit: A toolset for efficient Redux development, including state management and utilities.
- Jest: A powerful JavaScript testing framework that provides a simple and intuitive way to write unit tests for your code.


## Getting Started

Follow the instructions below to get the Scoreboard up and running on your local machine:

1. Clone the repository: `git clone https://github.com/Borojevic96/scoreboard.git`
2. Navigate to the project directory: `cd scoreboard`
3. Install the dependencies: `npm install`


## Development Mode
To start the app in development mode, run the following command:
`npm run dev`

This will start the development server. Open your browser and visit: http://localhost:3000

## Production Build
If you want to build the app for production, follow these steps:
`npm run build`

This command will generate the production-ready build of the app in the dist directory.
After the build process is complete, you can deploy the built files to a hosting service or server of your choice.

## Testing
The app includes unit tests to ensure the correctness of its components and functionality. To run the tests, use the following command:
`npm test`


## Usage
- When the app is launched, it will display a list of all matches, the scoreboard, and a summary.
- To update the score for a team, click the "Add goal" button next to the team's name in the scoreboard.
- To end a match, click the "End match" button in the corresponding row of the scoreboard.
- The summary section will display the final scores for all ongoing matches.
