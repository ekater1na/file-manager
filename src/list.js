import { readdir } from "fs/promises";
import { getDir } from "./../utils/getDir.js";
import { errOperation } from "./../utils/showError.js";

export const list = async () => {
  const path = getDir(import.meta.url);
  console.log("You are currently in " + process.cwd());

  try {
    const files = await readdir(path);
    files.forEach((item) => console.log(item));
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};
