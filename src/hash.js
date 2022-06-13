import crypto from "crypto";
import { existsSync, createReadStream } from "fs";

import { getPathFromFiles } from "./../utils/getPathFromFiles.js";
import { errInput, errOperation } from "./../utils/showError.js";

export const hash = (file) => {
  const path = getPathFromFiles(import.meta.url, file);

  try {
    if (existsSync(path)) {
      const src = createReadStream(path, "utf8");
      const hash = crypto
        .createHash("sha256")
        .update(src.toString())
        .digest("hex");
      console.log(hash);
    } else {
      console.error(errInput);
    }
  } catch (err) {
    console.error(errOperation);
    process.exitCode = 1;
  }
};
