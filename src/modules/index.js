const serviceLP = require('./service-lp/routes')

module.exports = (app) => {
    app.get('/cl/falabella/health', function(req, res) {
        res.status(200).send({ data: 'OK' })
    })
    app.use('/cl/falabella/', serviceLP.router)
}