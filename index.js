import { getHomeDir } from './utils/getHomeDir.mjs';
import { getUserName } from './utils/getUserName.js';

// const getHomeDir = getHomeDir();
// const username = getUserName();

process.stdout.write(`Welcome to the File Manager, ${getUserName()}!\n`)
process.stdout.write(`You are currently in ${getHomeDir()}, enter your command:\n`)


// import * as readline from 'readline';
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   rl.question('What is your name? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Hello: ${answer}`);
  
//     rl.close();
//   });