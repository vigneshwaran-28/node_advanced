const express = require("express");
const cron = require("node-cron");

const app = express();
// var task;
app.listen(3000, () => {
  var task = cron.schedule("* 1 * * * *", () => {
    console.log("crone ");
  });
  setTimeout(() => {
    task.start();
  }, 1000);
});

// app.use("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });
