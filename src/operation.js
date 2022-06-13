import { rename as renameFile, rm, writeFile } from "fs/promises";
import { createReadStream, createWriteStream } from "fs";

import { getPathFromFiles } from "./../utils/getPathFromFiles.js";
import { errOperation } from "./../utils/showError.js";

export const cat = async (file) => {
  const path = getPathFromFiles(import.meta.url, file);
  const readableStream = createReadStream(path);

  readableStream.on("data", (chunk) => {
    process.stdout.write(`${chunk}\n`);
  });
  readableStream.on("error", () => console.error(errOperation));
};

export const add = async (file) => {
  const src = getPathFromFiles(import.meta.url, file);
  const content = "Add file";

  try {
    await writeFile(src, content, { flag: "wx" });
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};

export const rn = async (oldName, newName) => {
  const name = getPathFromFiles(import.meta.url, oldName);
  const updName = getPathFromFiles(import.meta.url, newName);

  try {
    await renameFile(name, updName);
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};

export const cp = async (source, destination) => {
  try {
    const readable = createReadStream(source, { encoding: "utf8" });
    const writable = createWriteStream(destination);
    readable.pipe(writable);
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};

export const mv = async (file, destination) => {
  try {
    cp(file, destination);
    rm(file);
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};

export const remove = async (file) => {
  const path = getPathFromFiles(import.meta.url, file);

  try {
    await rm(path);
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};
