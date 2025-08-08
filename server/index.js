import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Mongoose model
const missionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String },
    location: { type: String, required: true },
    coordinates: { type: [Number], default: undefined },
    urgency: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'low' },
    status: { type: String, enum: ['active', 'in-progress', 'completed'], default: 'active' },
    area: { type: String, default: 'Manhattan' },
    imageUrl: { type: String },
  },
  { timestamps: true }
)

const Mission = mongoose.model('Mission', missionSchema)

// Routes
app.get('/api/missions', async (req, res) => {
  try {
    const missions = await Mission.find().sort({ createdAt: -1 })
    res.json(missions)
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch missions' })
  }
})

app.post('/api/missions', async (req, res) => {
  try {
    const mission = new Mission(req.body)
    await mission.save()
    res.status(201).json(mission)
  } catch (err) {
    res.status(400).json({ message: 'Failed to create mission', error: err?.message })
  }
})

async function start() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI not set in .env')
    }
    await mongoose.connect(process.env.MONGODB_URI)
    app.listen(port, () => console.log(`API listening on port ${port}`))
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()