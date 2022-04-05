//EX. 1 - CRIAR O SERVIDOR NODE COM PACOTE EXPRESS
const config = require("config")
const express = require("express")
const bodyParser = require("body-parser")

console.log("Server 'Atividade 1 - Servidor CRUD' connecting...");

let port = config.get("server.port");
//console.log("porta: ",porta); -- evitar redundância de definição de porta

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const clientroute = require("./routes/clientes")
clientroute(app, config)

app.listen(port, function() {
  console.log(`O servidor está conectado na porta ${port}`)
});

