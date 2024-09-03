
import path from 'path'
import express from 'express' 
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './config/db.js'

import Comment from './models/commentModel.js' 

dotenv.config()
connectDB()

const port = process.env.port || 8000

const app = express()

// app.use(cors({
//     origin: 'http://localhost:3000',
// }));

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve()
  app.use(express.static(path.join(__dirname, 'frontend/dist')))

  app.get('/comments', async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching users' });
    }
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  })

}
else{
  app.get('/', (req, res) => {
    res.send('Server is ready')  
  })
}

app.listen(port, () => console.log(`Server is running on port ${port}`))