const { get } = require('lodash')
var validator = require('email-validator')

module.exports = (req, res, next) => {
    let email = get(req, 'body.email')
    if (!email) {
        return res.status(200).send({ 'internalCode': 400, 'message': 'Debe incluir el email del cliente en la petición', payload: null });
    } else if (!validator.validate(email)) {
        return res.status(200).send({ 'internalCode': 400, 'message': 'Email incorrecto', payload: null });
    }
    next();
}