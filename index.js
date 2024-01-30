import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config({
      path:'./.env'
})


const port = process.env.PORT || 5000;

app.get('/', (req,res)=> {
      res.send('welcome to men and woman dummy data ')
})

app.get('/men', (req,res) => {
      res.send(' accept 10 product data men ')
})

app.get('/woman', (req,res) => {
      res.send('accept 10 products data of woman')
})

app.get('other', (req,res) => {
      res.send('page not found ')
})

app.listen(port, () => {
      console.log(`app is listening on port http://localhost:${port}`)
})