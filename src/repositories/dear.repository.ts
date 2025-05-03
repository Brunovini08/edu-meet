import { Dear } from './../generated/prisma/index.d';
import { PrismaClient } from '@prisma/client';
import type { ICreateDear, IDear } from "../types/dear.type";

export class DearRepository {


  static async createDear(dear: ICreateDear): Promise<IDear> {
    try {
      const prisma = new PrismaClient()
      const { email, name, password } = dear
      const emailExists = await prisma.dear.findUnique({
        where: {
          email
        }
      })
      if (emailExists) {
        throw new Error("Email já cadastrado")
      }
      const newDear = await prisma.dear.create({
        data: {
          email,
          name,
          password
        }
      })

    return newDear
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error("Erro interno do servidor")
    }
  }
}