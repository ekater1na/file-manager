import crypto from "crypto";
import { readFile } from "fs/promises";
import { getPathFromFiles } from "./../utils/getPathFromFiles.js";
import { errOperation } from "./../utils/showError.js";

export const hash = () => {
  console.log("in progress");
  const path = getPathFromFiles(import.meta.url, "fileToCalculateHashFor.txt");

  try {
    const data = readFile(path, "utf8");
    const hash = crypto.createHash("sha256").update(data).digest("hex");
    console.log(hash);
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};
