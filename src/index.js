import express from 'express';
import dotenv from 'dotenv';


import mongoose from 'mongoose';
dotenv.config()

const app = express()

mongoose
  .connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology:true})
  .then(connect => console.log('db connected'))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send({
        "message": "Good to go"
    })
})
app.listen(3000, ()=> console.log('server running'))