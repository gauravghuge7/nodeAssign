import app from './index.js';




function new1Assign() {

      app.get('/', (req,res)=> {
            res.send('I am homepage ')
      })

      app.get('/about', (req,res) => {
            res.send(' I am about page ')
      })

      app.get('/contact', (req,res) => {
            res.send('support support@pwskills.com')
      })


}

export default new1Assign;