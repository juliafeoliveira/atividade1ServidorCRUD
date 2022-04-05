module.exports = function() {
    const clientesDB = require("../data/clientes.json");

    const controller = {

      //EX. 3 b) - API 'GET' PARA RETORNAR OS DADOS DE TODOS OS CLIENTES
        showList: function(req, res) {
            res.status(200).json(clientesDB);
        },
        //EX. 3 c) - API 'POST' PARA CADASTRAR UM NOVO CLIENTE
        add: function (req, res) {
            console.log("POST: REQUEST ACCOMPLISHED :)");
            let {id,nome,endereco,email} = req.body;
            clientesDB.clientes.data[id] = { id, nome, endereco, email };
            res.status(200).json(clientesDB);
          },
          //EX. 3 d) - API 'PATCH' PARA ALTERAR OS DADOS DE UM CLIENTE
          update: function (req, res) {
            console.log("PATCH: REQUEST ACCOMPLISHED :)",req.body);
            let {id,nome,endereco,email} = req.body;
            clientesDB.clientes.data[id] = { id, nome, endereco, email };
            res.status(200).json(clientesDB);
          },
          //EX. 3 e) - API 'DELETE' PARA DELETAR OS DADOS DE UM CLIENTE
          remove: function (req, res) {
            console.log("DELETE: REQUEST ACCOMPLISHED :)",req.body);
            let id = req.body.id;
            delete clientesDB.clientes.data[id];
            res.status(200).json(clientesDB);
          },
        };
      
        return controller;
      };