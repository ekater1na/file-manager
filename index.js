import * as readline from "readline";

import { cat, add, rn, cp, mv, remove } from "./src/operation.js";
import { hash } from "./src/hash.js";
import { getOs } from "./src/os.js";
import { compress, decompress } from "./src/zip.js";

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
  const parameter = command.toString().trim().split(' ');

  switch (command) {
    case "up":
      goUp();
      break;
    case `cd ${parameter[1]}`:
      goDown(parameter[1]);
      break;
    case "ls":
      list();
      break;
    case `cat ${parameter[1]}`:
      cat(parameter[1]);
      break;
    case `add ${parameter[1]}`:
      add(parameter[1]);
      break;
    case `rn ${parameter[1]} ${parameter[2]}`:
      rn(parameter[1], parameter[2]);
      break;
    case `cp ${parameter[1]} ${parameter[2]}`:
      cp(parameter[1], parameter[2]);
      break;
    case `mv ${parameter[1]} ${parameter[2]}`:
      mv(parameter[1], parameter[2]);
      break;
    case `rm ${parameter[1]}`:
      remove(parameter[1]);
      break;
    case `hash ${parameter[1]}`:
      hash(parameter[1]);
      break;
    case `os ${parameter[1]}`:
      getOs(parameter[1]);
      break;
    case `compress ${parameter[1]} ${parameter[2]}`:
      compress(parameter[1], parameter[2]);
      break;
    case `decompress ${parameter[1]} ${parameter[2]}`:
      decompress(parameter[1], parameter[2]);
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
