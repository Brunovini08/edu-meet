import { Router } from "express";
import TeacherController  from "../controllers/teacher.controller";

export default function TeacherRoutes() {
    const router = Router()
    router.post('/register', TeacherController.createTeacher)
    return router
  }