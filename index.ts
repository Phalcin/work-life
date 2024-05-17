import express from "express";
const app = express();

// ugly code
// app.get("/student", (req, res) => {
//   res.send("All students");
// });

// app.post("/student", (req, res) => {
//   res.send("Add new student");
// });
// app.put("/student", (req, res) => {
//   res.send("Delete student");
// });
// app.delete("/student", (req, res) => {
//   res.send("Delete student");
// });

// Refactor
// app.route()
app
  .route("/student")
  .get((req, res) => res.send("all students"))
  .post((req, res) => res.send("Add new students"))
  .put((req, res) => res.send("Update student"))
  .delete((req, res) => res.send("Delete student"));

app.listen(3000, () => {
  console.log("server up!");
});
