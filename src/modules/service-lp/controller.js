const fs = require('fs')
const { get } = require('lodash')
const { writeFile } = require('../../utli/utils')
const { readFile } = require('../../utli/utils')

module.exports = class LPController {
    constructor() {
        this.create = this.create.bind(this);
        this.clients = this.clients.bind(this);
    }


    async create(req, res) {
        const { rut, phone, email, netSalary } = get(req, 'body', {})

        let client = {
            'rut': rut,
            'email': email,
            'phone': phone,
            'netSalary': netSalary
        }

        writeFile(client).then(resp => {
            res.status(200).send({ internalCode: 200, message: 'Insert OK', payload: resp })
        }, (err) => {
            res.status(200).send({ internalCode: 500, message: 'Internal server error', payload: err })
        })
    }

    async clients(req, res) {
        readFile().then(resp => {
            res.status(200).send({ internalCode: 200, message: 'succesfull', payload: resp })
        }, (err) => {
            res.status(200).send({ internalCode: 500, message: 'Internal server error', payload: err })
        })
    }
}