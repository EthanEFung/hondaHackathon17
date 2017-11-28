// const PythonShell = require("python-shell");

// PythonShell.run("python ../sampleModel.py", { mode: "text" }, err => {
//   if (err) console.log(err);
//   console.log("finished");
// });

const spawn = require("child_process").spawn;
const py = spawn("python", ["../sampleModel.py"]);

let data = [1, 2, 3, 4, 5];
let dataString = "";

py.stdout.on("data", function(data) {
  console.log("recieve data", data);
  dataString += data.toString();
});
py.stdout.on("end", function() {
  console.log("received");
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();

module.exports = {
  getCollisionScore: (req, res) => {
    console.log(dataString);
    const { intersection, long, lat } = req.params;

    res.send(dataString);
  }
};
