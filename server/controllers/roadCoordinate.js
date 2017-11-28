const { spawn, spawnSync } = require("child_process");
const py = spawn("python", ["server/sampleModel.py"]); //sample for route testing

let data = [1, 2, 3, 4, 5, 6, 7, 8]; //sample data
let dataString = ""; //sample result

module.exports = {
  getCollisionScore: (req, res) => {
    const { roadCoordinate } = req.params;

    py.stdout.on("data", data => {
      //append data that is printed by the python script
      dataString += data.toString();
    });
    py.stdout.on("end", function() {
      //send to the client the result from the script
      res.send(dataString);
    });
    py.stderr.on("data", err => {
      //handle errors
      if (err) throw "Error" + err;
    });

    //write the request parameters to the script
    py.stdin.write(JSON.stringify(data));
    py.stdin.end();
  }
};
