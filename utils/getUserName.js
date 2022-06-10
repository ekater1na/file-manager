export const getUserName = () => {
  return process.argv.slice(2);
};

getUserName();
