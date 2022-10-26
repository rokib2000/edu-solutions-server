const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const faq = require("./data/faq.json");

app.get("/", (req, res) => {
  res.send("Server running  successfully");
});

//get FAQ data json file
app.get("/faq", (req, res) => {
  res.send(faq);
});

//get courses data json file
app.get("/courses", (req, res) => {
  res.send(courses);
});

//get course data json file
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    res.send("Data Not found");
  } else {
    res.send(course);
  }
});

app.listen(port, () => {
  console.log(`Edu Solutions running port, ${port}`);
});
