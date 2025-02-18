import express from  'express';
import cors from "cors";
import dotenv from 'dotenv';
import UserRoutes from './Routes/UserRoutes/UserRoutes.js'
import { connectDB } from './config/db.js';
import recruiterRouter from './Routes/RecruiterRoutes/RecruiterRoutes.js';
import adminRouter from './Routes/AdminRoutes/AdminRoutes.js';


dotenv.config()
connectDB()

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const corsOptions = {
    origin: ['http://localhost:4000', 'https://stepglobal.in', 'https://www.stepglobal.in', 'http://localhost:3000'],
    methods: "GET, PUT, POST, PATCH, DELETE",
    allowedHeaders: ["Content-Type", "Authorization"]
  };
  app.use(cors(corsOptions));


app.use('/api/users',UserRoutes)
app.use('/api/recruiter',recruiterRouter)
app.use('/api/admin',adminRouter);

// Serving static files
app.use(express.static(join(__dirname, '../../Frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, "../../Frontend/dist/index.html"));
  });
  

app.get('/',(req,res)=>res.send("server is ready"))
const port= process.env.PORT||3000

app.listen(port,()=>
console.log("server started"))