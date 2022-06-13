import process from "process";
import { errOperation } from "./../utils/showError.js";

export const goUp = async () => {
  try {
    console.log("You are currently in " + process.cwd());
    process.chdir("..");
    console.log("You are currently in " + process.cwd());
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};

export const goDown = async (path) => {
  try {
    console.log("You are currently in " + process.cwd());
    process.chdir(path);
    console.log("You are currently in " + process.cwd());
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};
