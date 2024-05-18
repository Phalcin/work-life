import express from "express";
const router = express.Router();
import {
  allStudents,
  newStudent,
  updateStudent,
  deleteStudent,
} from "../controller/student";

router.get("/all", allStudents);
router.post("/create", newStudent);
router.put("/update", updateStudent);
router.delete("/delete", deleteStudent);

export default router;
