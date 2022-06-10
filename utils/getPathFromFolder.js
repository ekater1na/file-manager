import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const getPathFromFolder = (url) => {
  const __dirname = dirname(fileURLToPath(url));
  const folderPath = join(__dirname, "files");
  return folderPath;
};
