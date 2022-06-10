// TODO: import module bila dibutuhkan di sini
let fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = async (fnCallback) => {
  let arrayOfString = [];
  try {
    // Baca json 1
    fs.readFile(file1, (err, data) => {
      if (err) throw err;

      let objectInFile1 = JSON.parse(data);
      arrayOfString.push(objectInFile1["message"].split(" ")[1]);
    });

    // Baca json 2
    fs.readFile(file2, (err, data) => {
      if (err) throw err;

      let objectInFile2 = JSON.parse(data);
      arrayOfString.push(objectInFile2[0]["message"].split(" ")[1]);
    });

    // Baca json 3
    fs.readFile(file3, (err, data) => {
      if (err) throw err;

      let objectInFile3 = JSON.parse(data);
      arrayOfString.push(objectInFile3[0]["data"]["message"].split(" ")[1]);
    });

    setTimeout(() => {
      fnCallback(null, arrayOfString);
    }, 1000);
  } catch (error) {
    fnCallback(error, null);
  }
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
