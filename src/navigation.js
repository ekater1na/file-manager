import process from "process";

import { readdir } from "fs/promises";
import { getDir } from "./../utils/getDir.js";

export const goUp = async () => {
  try {
    console.log("You are currently in " + process.cwd());
    process.chdir("..");
    console.log("You are currently in " + process.cwd());
  } catch (err) {
    throw new Error(err);
  }
};

export const goDown = async () => {
  try {
    console.log("You are currently in " + process.cwd());
    process.chdir("src");
    console.log("You are currently in " + process.cwd());
  } catch (err) {
    throw new Error(err);
  }
};
