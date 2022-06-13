import process from "process";

export const getUserName = () => {
  return process.argv[2] ? process.argv[2].slice(11) : "user";
};
