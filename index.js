const express = require("express");
const EmployeesModel = require("./employee");
const app = express();
require("./config");
const EmoployeesModel = require("./employee");

app.use(express.json());

app.get("/read/:_id", async (req, res) => {
  const data = await EmployeesModel.find({
    $or: [
      { first_name: { $regex: req.params } },
      { last_name: { $regex: req.params } },
      { company: { $regex: req.params } },
    ],
  });

  res.send(data);
});

app.listen(3000);
