const home = (req, res) => {
    res.render('index', { tiposMasa:[
        {
        tipo:'viena',
        harina: 1000,
        agua: 600,
        levadura: 50,
        manteca: 85,
        azucar: 110,
        sal: 20,
        },
        {
        tipo: 'brioche', 
        harina: 1000,
        agua: 600,
        levadura: 50,
        manteca: 100,
        azucar: 180,
        sal: 20,
        },
        {
        tipo: 'muffin', 
        harina: 1000,
        agua: 250,
        leche: 250,
        levadura: 50,
        manteca: 44,
        azucar: 44,
        sal: 20,
        huevo: 2
        },
        {
        tipo: 'pizza',
        harina: 1000,
        agua: 600,
        levadura: 50,
        sal: 24,
        oliva:20
        }
        ]
        }
    )
}

module.exports = home
