const apparels = ["kelme", "adidas"];

const deleteData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (apparels.length === 0) {
        return reject("apparels data is empty");
      }

      apparels.pop();
      return resolve(apparels);
    }, 3000);
  });
};

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (apparels.length === 0) {
        return reject("apparels data is empty");
      }

      return resolve(apparels);
    }, 1000);
  });
};

async function main() {
  try {
    // Array.from({length: 2}, (_,i) => i + 1).forEach(async (item, value) => {
    //   await deleteData()
    // })
    for (let i = 1; i < 1000; i++) {
      const res = await deleteData();
      console.log(res);
    }
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}

main();
