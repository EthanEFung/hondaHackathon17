//Contribution by rik
const fs = require("fs");

module.exports = {
  findRecentCollision: (req, res) => {
    var array = fs
      .readFileSync("file.txt") // aggregate of latitude points
      .toString()
      .replace(/\r\n/g, "\n")
      .split("\n");

    res.file_1 = JSON.stringify(array);

    var array2 = fs
      .readFileSync("file2.txt") // aggregate of longitude points
      .toString()
      .replace(/\r\n/g, "\n")
      .split("\n");

    res.file_2 = JSON.stringify(array2);

    res.send(res);
  }
};
