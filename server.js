const express = require('express')
const app = express()
const ctrlhome = require('./control/main')
const ctrlrecetas = require('./control/recetas')
const morgan = require("morgan")
const router = express.Router()

app.use(express.static('style'))
/* directory to look for pug files // path.join(__dirname, 'views')  if more folder exist ojo! */
app.set('views')
/* set view engine */
app.set('view engine', 'pug')



/* logs */
app.use(morgan("short"))
/* serve home page */
app.get('/', ctrlhome)
app.post('/')
app.get('/recetas', ctrlrecetas)


/* POST */
app.use(express.urlencoded({
  extended: true
}))

router.post('/', (req, res) => {

  const tipoMasa = req.body.tipoMasa
  const gramosMasa = req.body.gramosMasa
  res
    .status(200)
    .send(tipoMasa, gramosMasa)
})


/* initialize server */
app.listen(3000)
console.log('corriendo en 3000')
