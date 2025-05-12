import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  try {
    // Tenta conectar ao banco de dados
    await prisma.$connect()
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!')
    
    // Testa uma consulta simples
    const teacherCount = await prisma.teacher.count()
    console.log(`Número de professores no banco: ${teacherCount}`)
    
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 