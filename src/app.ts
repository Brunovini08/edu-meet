import express from "express";
import cors from "cors"
import DearRoutes from "./routes/dear.route";
import TeacherRoutes from "./routes/teacher.routes";

export const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/dear", DearRoutes())
app.use("/teacher", TeacherRoutes())