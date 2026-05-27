import 'dotenv/config'
import express from 'express'
import { connectDB } from './config/database.js'
import userRoutes from './routes/users.routes.js'
import adminRoutes from './routes/admin.routes.js'
import blogRoutes from './routes/blogs.routes.js'
import subjectRoutes from './routes/subject.routes.js'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'

import validationRegistration from './middleware/validation.js'



// CREATE AN OBJECT
const app = express()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());



// static files setup
app.use(express.static(path.join(__dirname, 'public')))

// database calling
connectDB()

// APIs
app.use('/api/v1/blogs',blogRoutes)
app.use('/api/v1/subjects',subjectRoutes)
app.use('/api/v1/admin',adminRoutes)
// middleware
app.use(validationRegistration)
// routes
app.use('/api/v1/users', userRoutes)


// server is listening
const PORT = Number(process.env.PORT) || 3000;


    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })



    // IMPORTANT FOR VERCEL
export default app;