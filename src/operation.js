import { rm } from "fs/promises";
import { rename as renameFile } from "fs/promises";

import { createReadStream } from "fs";
import { pipeline } from "stream";

import { writeFile } from "fs/promises";
import { getPathFromFiles } from "./../utils/getPathFromFiles.js";

import { errOperation } from "./../utils/showError.js";

export const cat = async () => {
  const path = getPathFromFiles(import.meta.url, "content.txt");

  const readableStream = createReadStream(path, "utf8");

  pipeline(readableStream, process.stdout, (err) => {
    if (err) {
      console.error(errOperation);
      process.exitCode = 1;
    }
  });
};

export const add = async () => {
  const src = getPathFromFiles(import.meta.url, "fresh.txt");
  const content = "Add file";

  try {
    await writeFile(src, content, { flag: "wx" });
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};

export const rn = async () => {
  const name = getPathFromFiles(import.meta.url, "bed.txt");
  const newName = getPathFromFiles(import.meta.url, "nice.md");

  try {
    await renameFile(name, newName);
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};

export const cp = async () => {
  console.log("in progress");
};

export const mv = async () => {
  console.log("in progress");
};

export const remove = async () => {
  const path = getPathFromFiles(import.meta.url, "fresh.txt");

  try {
    await rm(path);
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};
