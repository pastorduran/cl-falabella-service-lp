# CL-FALABELLA-SERVICE-LP
API-REST para landing page de solicitud de cuenta corriente en Banco Falabella

## Requisitos

Para desarrolladores, solo se necesita tener la versión 12 de nodejs y la version y de npm instalados en tu pc

## Instalación

    $ git clone https://github.com/pastorduran/cl-falabella-service-lp
    $ cd cl-falabella-service-lp
    $ npm install

## Ejecutar proyecto

    $ node app


## 1. save-account

Este servicio registra un cliente en un archivo json.

* **Method:**
   `
   POST application/json
   `

* **Url:**
```
localhost:8080/cl/falabella/save-account
```

* **Headers:**  
 1. **Content-Type:** application/json  
 
* **Sample Request:**
```
curl -H "Content-Type: application/json" -d "{ "rut" : "23241072-8", "email" : "pastrjduran@gmail.com",	"phone" : "+56936878076", "netSalary" : 2500000}" -X POST localhost:8080/cl/falabella/save-account
```

* **Sample Response:**
```
{
    "internalCode": 200,
    "message": "Insert OK",
    "payload": {
        "rut": "23241072-8",
        "email": "pastrjduran@gmail.com",
        "phone": "+56936878076",
        "netSalary": 2500000
    }
}
```

** Errores en caso de falla:**  
```
{ "internalCode": "500", "message": "Internal Server Error", "payload" : null}
``` 
```
{ "internalCode": 400,  "message": "Duplicated account",  "payload": null}
```
