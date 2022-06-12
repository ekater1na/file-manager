import * as readline from "readline";

import { cat, add, rn, cp, mv, rm } from "./src/operation.js";
import { hash } from "./src/hash.js";
import { getOs } from "./src/os.js";

import { goUp, goDown } from "./src/navigation.js";
import { list } from "./src/list.js";

import { exit as doExit } from "./src/exit.js";

import { getDir } from "./utils/getDir.js";
import { getUserName as username } from "./utils/getUserName.js";
import { errInput } from "./utils/showError.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write(`Welcome to the File Manager, ${username()}!\n`);
process.stdout.write(`You are currently in ${getDir()}, enter your command:\n`);

rl.on("line", async (command) => {
  switch (command) {
    case "up":
      goUp();
      break;
    case "cd":
      goDown();
      break;
    case "ls":
      list();
      break;
    case "cat":
      cat();
      break;
    case "add":
      add();
      break;
    case "rn":
      rn();
      break;
    case "cp":
      cp();
      break;
    case "mv":
      mv();
      break;
    case "rm":
      rm();
      break;
    case "hash":
      hash();
      break;
    case "os":
      getOs();
      break;
    case "compress":
      compress();
      break;
    case "decompress":
      decompress();
      break;
    case ".exit":
      doExit();
      rl.close();
      break;
    default:
      process.stdout.write(`${errInput}\n`);
  }
}).on("SIGINT", () => rl.close());
rl.on("close", () => doExit());
