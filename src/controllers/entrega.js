const db = [];
const endereco_controller = require("./endereco.js");
const entregador_controller = require("./entregador.js");
let nextId = 1;

const model = (entrega, id_entrega = nextId++) => {
  if (
    entrega.id_endereco != undefined &&
    entrega.id_entregador != undefined &&
    entregador_controller.show(entrega.id_entregador) &&
    endereco_controller.show(entrega.id_endereco)
  ) {
    return {
      id_entrega,
      id_entregador: entrega.id_entregador,
      id_endereco: entrega.id_endereco,
    };
  }
};
const store = (body) => {
  const novo = model(body);
  if (novo) {
    db.push(novo);
    return 201;
  }
  return 400;
};

const index = () => db;

const show = (id_entrega) => db.find((el) => el.id_entrega == id_entrega);

const update = (id_entrega, body) => {
  const index = db.findIndex((el) => el.id_entrega == id_entrega);
  const novo = model(body, parseInt(id_entrega));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_entrega) => {
  const index = db.findIndex((el) => el.id_entrega == id_entrega);
  if (index != -1) {
    db.splice(index, 1);
    return 200;
  }
  return 400;
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
