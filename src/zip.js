import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { getPathFromFiles } from "./../utils/getPathFromFiles.js";
import  zlib   from "zlib";
import { pipeline } from "node:stream";
import { errOperation } from "./../utils/showError.js";

export const compress = async () => {
  const sourcePath = getPathFromFiles(import.meta.url, "fileToCompress.txt");
  const destinationPath = getPathFromFiles(import.meta.url, "archive.br");

  const brotli = zlib.createBrotliCompress();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  pipeline(source, brotli, destination, (err) => {
    if (err) {
      console.error(errOperation);
      process.exitCode = 1;
    }
  });
};

export const decompress = async () => {
  
  const sourcePath = getPathFromFiles(import.meta.url, "archive.br");
  const destinationPath = getPathFromFiles(
    import.meta.url,
    "fileToCompress.txt"
  );

  const brotli = zlib.createBrotliDecompress();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  
  pipeline(source, brotli, destination, (err) => {
    if (err) {
      console.error(errOperation);
      process.exitCode = 1;
    }
  });
  
};
