const fs = require('fs')

let readFile = () => {
    return new Promise((resolve, reject) => {
        try {
            let rawData = fs.readFileSync('src/data/clientsData.json')
            let clients = JSON.parse(rawData)
            resolve(clients)
        } catch (err) {
            reject(err)
        }
    });
}

let writeFile = (client) => {
    return new Promise((resolve, reject) => {
        try {
            let rawData = fs.readFileSync('src/data/clientsData.json')
            jsonData = JSON.parse(rawData)
            jsonData.push(client);
            fs.writeFileSync('src/data/clientsData.json', JSON.stringify(jsonData))
            resolve(client)
        } catch (err) {
            reject(err)
        }
    });
}

let findRecord = async(rut, email) => {
    return new Promise((resolve, reject) => {
        try {
            let rawData = fs.readFileSync('src/data/clientsData.json')
            jsonData = JSON.parse(rawData)
            let client = jsonData.filter((item) => {
                if (item.rut === rut) {
                    return item
                }
                if (item.email === email) {
                    return item
                }
            });
            resolve(client)
        } catch (err) {
            reject(err)
        }
    });
}

module.exports = {
    readFile,
    writeFile,
    findRecord
}