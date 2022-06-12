
import { readdir } from "fs/promises";
import { getDir } from "./../utils/getDir.js";
import { errOperation } from "./../utils/showError.js";

export const list = async () => {
    const path = getDir(import.meta.url);
  
    try {
      const files = await readdir(path);
      files.forEach((item) => console.log(item));
    } catch (err) {
      throw new Error(errOperation);
    }
  };
  