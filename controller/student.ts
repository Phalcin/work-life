import express from "express";

const allStudents = (req: any, res: any) => res.send("All students");

const newStudent = (req: any, res: any) => {
  res.send("Create new user");
};

const updateStudent = (req: any, res: any) => {
  res.send("Update User");
};

const deleteStudent = (req: any, res: any) => {
  res.send("Delete user");
};

export { allStudents, newStudent, updateStudent, deleteStudent };
