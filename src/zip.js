import { createReadStream, createWriteStream } from "node:fs";
import { getPathFromFiles } from "./../utils/getPathFromFiles.js";
import  zlib   from "zlib";
import { pipeline } from "node:stream";
import { errOperation } from "./../utils/showError.js";

export const compress = async (path, destination) => {
  const sourcePath = getPathFromFiles(import.meta.url, path);
  const destinationPath = getPathFromFiles(import.meta.url, destination);

  const brotli = zlib.createBrotliCompress();
  const source = createReadStream(sourcePath);
  const dest = createWriteStream(destinationPath);

  pipeline(source, brotli, dest, (err) => {
    if (err) {
      console.error(errOperation);
      process.exitCode = 1;
    }
  });
};

export const decompress = async (path, destination) => {
  
  const sourcePath = getPathFromFiles(import.meta.url, path);
  const destinationPath = getPathFromFiles(
    import.meta.url,
    destination
  );

  const brotli = zlib.createBrotliDecompress();
  const source = createReadStream(sourcePath);
  const dest = createWriteStream(destinationPath);

  
  pipeline(source, brotli, dest, (err) => {
    if (err) {
      console.error(errOperation);
      process.exitCode = 1;
    }
  });
  
};
