const { spawn, spawnSync } = require("child_process");
const py = spawn("python", ["server/sampleModel.py"]);

let data = [1, 2, 3, 4, 5, 6, 7, 8];
let dataString = "";

module.exports = {
  getCollisionScore: (req, res) => {
    const { intersection, long, lat } = req.params;

    py.stdout.on("data", data => {
      console.log("recieving data", data);
      dataString += data.toString();
    });
    py.stdout.on("end", function() {
      res.send(dataString);
    });
    py.stderr.on("data", err => {
      if (err) throw "Error" + err;
    });

    py.stdin.write(JSON.stringify(data));
    py.stdin.end();
  }
};
