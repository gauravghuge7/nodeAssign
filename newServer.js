import app from './index.js';




function newAssign() {

      app.get('/', (req,res)=> {
            res.send('send count data as counter')
      })

      app.get('/increment', (req,res) => {
            res.send('this is the increment opertor ')
      })

      app.get('/decrement', (req,res) => {
            res.send('this is the decrement opertor')
      })


}

export default newAssign;