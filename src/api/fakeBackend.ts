import data from "../data/fakedb.json";

const getUserBoard = (userId: string) => {
  return new Promise((resolve, reject) => {
    if (data) resolve(data[0]);
    reject("Data not found");
  });
};

export { getUserBoard };
