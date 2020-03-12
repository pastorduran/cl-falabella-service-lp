const { get } = require('lodash')

module.exports = (req, res, next) => {
    let netSalary = get(req, 'body.netSalary')
    if (!netSalary) {
        return res.status(200).send({ 'internalCode': 400, 'message': 'Debe incluir el netSalary del cliente en la petición', payload: null });
    }
    next();
}