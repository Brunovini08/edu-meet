import bcrypt from "bcrypt";
import type { ICreateDear, IDear } from "../types/dear.type";
import { DearRepository } from "../repositories/dear.repository";

export default class DearService {

  static async createDear(dear: ICreateDear): Promise<IDear> {
    try{
      const { password } = dear
      const hashedPassword =  await bcrypt.hash(password, 10)
      const filterDear = { ...dear, password: hashedPassword }
      const createDear =  DearRepository.createDear(filterDear)
      return createDear
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error("Erro interno do servidor")
    }
  }
}