//then-catch

const wait = (str, time) => {
  return new Promise((resolve, reject) => {
    if (typeof str !== "string") {
      reject("err: harus string");
    } else {
      setTimeout(() => {
        resolve(str);
      }, time);
    }
  });
};

wait("John", 1500)
  .then((res) => {
    console.log(res);
    wait("Ed", 2000)
      .then((res) => {
        console.log(res);
        wait("Jane", 500)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });


//async-await

async function antrian() {
    try {
      const antrian1 = await wait("John", 1500);
      console.log(antrian1);
      const antrian2 = await wait("Ed", 2000);
      console.log(antrian2);
      const antrian3 = await wait("Jane", 500);
      console.log(antrian3);
    } catch(err) {
        console.log(err);
    }
}


antrian()



