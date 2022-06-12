import process from "process";
import { errOperation } from "./../utils/showError.js";

export const goUp = async () => {
  try {
    console.log("You are currently in " + process.cwd());
    process.chdir("..");
    console.log("You are currently in " + process.cwd());
  } catch (err) {
    throw new Error(errOperation);
  }
};

export const goDown = async () => {
  try {
    console.log("You are currently in " + process.cwd());
    process.chdir("src");
    console.log("You are currently in " + process.cwd());
  } catch (err) {
    throw new Error(errOperation);
  }
};
