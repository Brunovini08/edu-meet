import { PrismaClient } from "@prisma/client";
import type { ICreateTeacher, ITeacher } from "../types/teacher.type";

export class TeacherRepository{

  static async createTeacher(teacher: ICreateTeacher): Promise<ITeacher>
  {
    try {
      const prisma = new PrismaClient()
      const { email, name, password, description, category } = teacher
      const emailExists = await prisma.teacher.findUnique({
        where: {
          email
        }
      })
      if (emailExists){
        throw new Error("Email já cadastrado")
      }
      const newTeacher = await prisma.teacher.create({
        data: {
          email,
          name,
          password,
          description,
          category
        }
      })

      return {
        ...newTeacher,
        description: newTeacher.description || ""
      }
    } catch (error){
      if (error instanceof Error){
        throw new Error(error.message)
      }
      throw new Error("Erro interno do servidor")
    }
  }
}