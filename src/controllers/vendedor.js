const db = [];
const cliente_controller = require("./cliente.js");
const entrega_controller = require("./entrega.js");
let nextId = 1;

const model = (vendedor, id_vendedor = nextId++) => {
  if (vendedor.nome != undefined && vendedor.nome != "") {
    return {
      id_vendedor,
      id_cliente: vendedor.id_cliente,
      id_entrega: vendedor.id_entrega,
      nome: vendedor.nome,
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

const show = (id_vendedor) => db.find((el) => el.id_vendedor == id_vendedor);

const update = (id_vendedor, body) => {
  const index = db.findIndex((el) => el.id_vendedor == id_vendedor);
  const novo = model(body, parseInt(id_vendedor));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_vendedor) => {
  const index = db.findIndex((el) => el.id_vendedor == id_vendedor);
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
