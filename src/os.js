import { cpus, EOL } from "node:os";
import process from "process";

export const getOs = async () => {
  console.log("1-EOL:", JSON.stringify(EOL));

  const cpusData = cpus().map(({ model, speed }) => {
    speed = `${speed / 1000}GHz`;
    return { model, speed };
  });
  console.log("2-cpus:");
  console.table(cpusData);

  console.log("3-homedir:", process.env.HOME || process.env.USERPROFILE);

  console.log("4-username:", process.env.USERNAME);

  console.log("5-architecture:", process.arch);
};
