module.exports = function (app,config) {
    const controllerFactory = require("../controllers/clientes");
    const controller = controllerFactory();
  
    app
      .route(config.get("server.path_root") + "clientes")
      .get(controller.showList);
  
    app
      .route(config.get("server.path_root") + "clientes")
      .post(controller.add);
  
    app
      .route(config.get("server.path_root") + "clientes")
      .patch(controller.update);
  
    app
      .route(config.get("server.path_root") + "clientes")
      .delete(controller.remove);
  
  };