const { Router } = require('express')
const LPController = require('./controller')
const controller = new LPController()
const rutValidator = require('../../middleware/rutValidator')
const emailValidator = require('../../middleware/emailValidator')
const phoneValidator = require('../../middleware/phoneValidator')
const salaryValidator = require('../../middleware/salaryValidator')

const router = new Router()


const routes = [{
    method: 'post',
    path: '/save-account',
    middleware: [rutValidator, emailValidator, phoneValidator, salaryValidator],
    action: controller.create
}, {
    method: 'get',
    path: '/clients',
    middleware: [],
    action: controller.clients
}]

const allRouter = routes.map(({
    method,
    path,
    middleware,
    action,
    callback = []
}) => router[method](path, middleware, action, callback))
module.exports.router = allRouter;