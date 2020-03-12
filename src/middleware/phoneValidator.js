const { get } = require('lodash')

module.exports = (req, res, next) => {
    let phone = get(req, 'body.phone')
    if (!phone) {
        return res.status(200).send({ 'internalCode': 400, 'message': 'Debe incluir el phone del cliente en la petición', payload: null });
    }
    next();
}