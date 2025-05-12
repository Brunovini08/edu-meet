import { Request, Response } from "express";
import TeacherService from "../services/teacher.service";

export default class TeacherController {

 static async createTeacher(req: Request, res: Response): Promise<void> {
  try{
    const { name, email, password, description, category }=req.body;
    if(!name || !email || !password || !category){
      res.status(400).json({ message: "Todos os campos são obrigatórios" });
      return;
    }
    const teacher = await TeacherService.createTeacher({ name, email, password, description, category });
    res.status(201).json({ message: "usuário criado com sucesso", teacher });
  } catch(error) {
    if(error instanceof Error){
      res.status(500).json({ message: error.message });
    } else{
      res.status(500).json({ message: "Erro interdo do servidor"});
    }
  }
 }
}
