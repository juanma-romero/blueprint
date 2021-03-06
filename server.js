const express = require('express')
const app = express()
const ctrlhome = require('./control/main')
const ctrlrecetas = require('./control/recetas')
const morgan = require("morgan")
const bodyParser = require('body-parser')
const data = require('./model/recipes.json')
const PORT = process.env.PORT || 5000;

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
      const totalMasaReceta = Object.values(data.tiposMasa[i]).map(i => parseInt(i)).filter(Boolean).reduce((t, n) => t + n)
      //console.log(data.tiposMasa[i]) imprime el objeto de la receta que matchea el post
      // crea array con valores para cada ingrediente de acuerdo a pedido
      var arrayVal = Object.values(data.tiposMasa[i]).map(i => parseInt(i)).filter(Boolean).map(i => (i / totalMasaReceta)*gramosMasa)
      var keys = Object.keys(data.tiposMasa[i]).slice(1)
      //crea objeto desde los array recien creados
      var respObj = {}
      keys.forEach((key, i) => respObj[key] = Math.round(arrayVal[i]));
      
    }
  }
  const respuesta = {
    'masaPedida': tipoMasa,
    'gramosPedido': gramosMasa,
    'respuesta': respObj    
  }  

  res.render('complete', respuesta)
})


/* initialize server */
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))