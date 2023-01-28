# Metrepay Endpoint API

Recibe notificaciones de METREPAY por pago de cuota de pago recurrente via API e inserta en base de datos para tener los registros y uso para los envios masivos 

# Conexion con la base

Se conecta a la base PostgreSQL metrepay_endpoint que esta alojada en el 192.168.10.245

## Installation

Clone the repo and run npm install

```bash
npm i
```

## Usage I

Includes nodemon for development. Run npm run dev while developing

```python
npm run dev
```
Then you can test the API using the browser or Postman opening http://localhost:24000/tasks

## Usage II

For run in production you need to run npm babel-node to translate the code or just run npm start for start the server

```
npm run build
npm start
```

## License
Alejandro Grance
