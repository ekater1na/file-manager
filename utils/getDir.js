import { fileURLToPath } from "url";
import { dirname } from "path";

const get__dirName = (metaUrl) => {
  const __filename = fileURLToPath(metaUrl); //import.meta.url
  return dirname(__filename);
};

export { get__dirName };


// import {fileURLToPath} from "url";
// import {dirname} from "path";

// export function get__dirName(metaUrl) {
//   const __filename = fileURLToPath(metaUrl) //import.meta.url
//   return dirname(__filename)
// }