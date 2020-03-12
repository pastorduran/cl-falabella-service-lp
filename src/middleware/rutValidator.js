const { get } = require('lodash')

module.exports = (req, res, next) => {
    console.log(get(req, 'body', {}))
    let rut = get(req, 'body.rut')
    if (!rut) {
        return res.status(200).send({ 'internalCode': 400, 'message': 'Debe incluir el rut del cliente en la petición', payload: null });
    }
    next();
}