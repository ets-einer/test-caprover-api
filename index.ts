import express from 'express'
import { prisma } from './prisma';

const PORT = 3000

const app = express();

app.get("/bigas", async (req, res) => {
  const examples = await prisma.example.findMany() 
  return res.json({
    message: "Bigas é um bokinha dedo no cu e gritaria () => {}",
    examples
  })
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))