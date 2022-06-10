import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const getPathFromFiles = (url, filename) => {
  const __dirname = dirname(fileURLToPath(url));
  const filePath = join(__dirname, "files", filename);
  return filePath;
};
