import  { Request, type Response } from "express";
import DearService from "../services/dear.service";

export default class DearController {

 static async registerDear(req: Request, res: Response): Promise<void> {
  try{
    const { name, email, password } = req.body;
    console.log(req.body)
    if( !name || !email || !password) {
      res.status(400).json({ message: "Todos os campos são obrigatórios" });
      return;
    }
    const dear = await DearService.createDear({ name, email, password })
  } catch(error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
 } 
}