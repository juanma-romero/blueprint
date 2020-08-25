const express = require('express')
const app = express()
const ctrlhome = require('./control/main')
const ctrlrecetas = require('./control/recetas')
const morgan = require("morgan")
const bodyParser = require('body-Parser')
const data = require('./model/recipes.json')

app.use(express.static('style'))
/* directory to look for pug files // path.join(__dirname, 'views')  if more folder exist ojo! */
app.set('views')
/* set view engine */
app.set('view engine', 'pug')



/* logs */
app.use(morgan("short"))

/* serve home page  y recetas*/
app.get('/', ctrlhome)


app.get('/recetas', ctrlrecetas)

/* parse json */
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

/* POST */
app.post('/', (req, res) => {
  const tipoMasa = req.body.tipoMasa
  const gramosMasa = req.body.gramosMasa
  
  /* compare tipos de masa post vs data, reduce values of object */
  for (var i=0;i<data.tiposMasa.length;i+=1) {
    //console.log(data.tiposMasa[i].tipo);  imprime los tipos de masa en receta
    if (tipoMasa === data.tiposMasa[i].tipo) {
      const total = Object.values(data.tiposMasa[i]).map(i => parseInt(i)).filter(Boolean).reduce((t, n) => t + n)
      //console.log(data.tiposMasa[i]) imprime el objeto de la receta que matchea el post
      
    }
  }


  
  
  res.send(tipoMasa)
})


/* initialize server */
app.listen(3000)
console.log('corriendo en 3000')
