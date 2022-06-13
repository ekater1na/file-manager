import { cpus, EOL } from "node:os";
import process from "process";
import { errOperation } from "./../utils/showError.js";

export const getOs = async (param) => {
  const cpusData = cpus().map(({ model, speed }) => {
    speed = `${speed / 1000}GHz`;
    return { model, speed };
  });

  switch (param) {
    case "--EOL":
      console.log(JSON.stringify(EOL));
      break;
    case "--cpus":
      console.table(cpusData);
      break;
    case "--homedir":
      console.log(process.env.HOME || process.env.USERPROFILE);
      break;
    case "--username":
      console.log(process.env.USERNAME);
      break;
    case "--architecture":
      console.log(process.arch);
      break;
    default:
      console.log('Please, add parameters');
  }
};
