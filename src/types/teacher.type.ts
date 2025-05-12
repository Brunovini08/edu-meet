import { Category } from "@prisma/client"

export interface ICreateTeacher {
  name: string
  email: string
  password: string  
  description?: string
  category: Category
}

export interface ITeacher {
  id: string
  name: string
  email: string
  password: string
  description?: string
  category: Category
  createdAt: Date
  updatedAt: Date
} 