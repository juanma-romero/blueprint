

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

module.exports = router