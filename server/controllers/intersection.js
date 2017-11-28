/** CURRENT BUG
 * detailed below is the issue I am facing
 */
const spawn = require("child_process").spawn;
const py = spawn("python", ["../sampleModel.py"]); //sampleModel is found in the server folder

let data = [1, 2, 3, 4, 5]; //here is the data I want to process
let dataString = ""; //this is where the data from python should be after processing

py.stdout.on("data", function(data) {
  console.log("recieving data", data); //this print is never run in the terminal
  dataString += data.toString();
});
py.stdout.on("end", function() {
  console.log("received", dataString); //this is run with the empty string defined above
});
py.stdin.write(JSON.stringify(data)); //ideally this function is invoked and written to python
py.stdin.end(); //ends the process

module.exports = {
  getCollisionScore: (req, res) => {
    console.log(dataString);
    const { intersection, long, lat } = req.params;
    res.send(dataString);
  }
};
