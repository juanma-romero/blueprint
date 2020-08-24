const data = require('../model/recipes.json')

const home = (req, res) => {
    res.render('index', {data: data})
}

module.exports = home
