import bcrypt from "bcrypt";
import type { ICreateTeacher, ITeacher } from "../types/teacher.type";
import { TeacherRepository } from "../repositories/teacher.repository";

export default class TeacherService {
  
  static async createTeacher(teacher: ICreateTeacher): Promise<ITeacher> {
    try {
      const { password } = teacher;
      const hashedPassword = await bcrypt.hash(password, 10);
      const filterTeacher = { ...teacher, password: hashedPassword };
      const createTeacher = await TeacherRepository.createTeacher(filterTeacher);
      return createTeacher;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Erro interno do servidor");
    }
  }
} 