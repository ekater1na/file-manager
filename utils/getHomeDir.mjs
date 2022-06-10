import os from "os";

const getHomeDir = () => {
  // const homedir = os.homedir();
  // console.log("homedir", homedir);
  return process.env.HOME || process.env.USERPROFILE;
};

export { getHomeDir };
