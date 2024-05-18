import express from "express";
import products from "./products";
import students from "./routes/student";
import teachers from "./routes/teacher";
const app = express();

function userCredentials(req: any, res: any, next: any) {
  console.log(`Username : (Alex)`);
  console.log(`email : (alex21@gmail.com)`);
  console.log(`password: (alex222333)`);
  console.log(`age : (18)`);
  next();
}

app.use(userCredentials);

app.get("/", userCredentials, (req, res) => {
  res.send(`<h1> Hello admin </h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1> About section </h1>`);
});

app.get("/contact", (req, res) => {
  res.send(`<h1> Contact Page </h1>`);
});

app.listen(3000, () => {
  console.log("server up!");
});
