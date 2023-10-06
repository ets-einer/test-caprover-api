import express from 'express'
import { prisma } from './prisma';
import { z } from 'zod'

const PORT = 4000

const app = express();

app.use(express.json());

app.get("/bigas", async (req, res) => {
  const examples = await prisma.example.findMany() 
  return res.json({
    message: "Bigas é um bokinha dedo no cu e gritaria () => {}",
    examples
  })
})

app.post("/bigas", async (req, res) => {
  const result = z.object({
    name: z.string().min(1)
  }).safeParse(req.body)

  if (!result.success) {
    console.log(result.error);
     return res.status(400).json({
      message: "VC EH BUIRRO"
    })
  }

  const created = await prisma.example.create({
    data: {
      name: result.data.name,
      description: result.data.description
    }
  })

  return res.json({
    message: "Bigas criado",
    created
  })
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
