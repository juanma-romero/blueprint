const data = require('../model/recipes.json')

const recetas = (req, res) => {
  res.render('recetas', {data: data})
}
module.exports = recetas