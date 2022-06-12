import { getUserName } from "./../utils/getUserName.js";

export const exit = async () => {
  process.stdout.write(`Thank you for using File Manager, ${getUserName()}!`);
};
