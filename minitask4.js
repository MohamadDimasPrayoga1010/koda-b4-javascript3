const url = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  try {
    const dataApi = await fetch(url);
    const datas = await dataApi.json();
    console.log(datas);

    //built-in method
    let emailArray = [];
    datas.forEach(function (data) {
      const namaEmail = data.email.toLowerCase();
      console.log(namaEmail);

      //tampilan list email yg sudah diubah kedalam bentuk array
      emailArray.push(namaEmail);
    });
    console.log(emailArray);
  } catch (err) {
    console.log(err);
  }

  handling();
}

getData();

//then-catch
function handlingThen(res) {
  fetch(url)
    .then((res) => res.json())
    .then((datas) => {
      let emailArray = [];
      datas.forEach(function (data) {
        const namaEmail = data.email.toLowerCase();
        console.log(namaEmail);

        //tampilan list email yg sudah diubah kedalam bentuk array
        emailArray.push(namaEmail);
      });
      console.log(emailArray);
    })
    .catch((err) => console.log(err));
}

handlingThen();

const abjad = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
  H: "h",
  I: "i",
  J: "j",
  H: "h",
  I: "i",
  J: "j",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  O: "o",
  P: "p",
  Q: "q",
  R: "r",
  S: "s",
  T: "t",
  U: "u",
  V: "v",
  W: "w",
  X: "x",
  Y: "y",
  Z: "z",
};
async function getDataManual() {
  try {
    const dataApi = await fetch(url);
    const datas = await dataApi.json();
    let manual = [];
    console.log(datas[0].email);
    for (let m = 0; m < datas.length; m++) {
      manual[m] = datas[m].email;
    }
    // console.log(manual);
    for (let l = 0; l < manual.length; l++) {
      let cekEmail = manual[l];
      let lowerEmail = "";
      for (let a = 0; a < cekEmail.length; a++) {
        if (abjad[cekEmail[a]]) {
          lowerEmail += abjad[cekEmail[a]];
        } else {
          lowerEmail += cekEmail[a];
        }
      }
      manual[l] = lowerEmail;
    }
    console.log(manual);
  } catch (err) {
    console.log(err);
  }
}
getDataManual();

function lowerBuilt(res) {
  fetch(url)
    .then((res) => {
      res
        .json()
        .then((datas) => {
          let manual = [];
          console.log(datas[0].email);
          for (let m = 0; m < datas.length; m++) {
            manual[m] = datas[m].email;
          }
          // console.log(manual);
          for (let l = 0; l < manual.length; l++) {
            let cekEmail = manual[l];
            let lowerEmail = "";
            for (let a = 0; a < cekEmail.length; a++) {
              if (abjad[cekEmail[a]]) {
                lowerEmail += abjad[cekEmail[a]];
              } else {
                lowerEmail += cekEmail[a];
              }
            }
            manual[l] = lowerEmail;
          }
          console.log(manual);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
}
lowerBuilt();
