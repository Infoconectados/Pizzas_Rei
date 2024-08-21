const db = [];
const cliente_controller = require("./cliente.js");
const vendedor_controller = require("./vendedor.js");
let nextId = 1;

const model = (pedido, id_pedido = nextId++) => {
  if (
    pedido.id_cliente != undefined &&
    pedido.id_vendedor != undefined &&
    cliente_controller.show(pedido.id_cliente) &&
    vendedor_controller.show(pedido.id_vendedor)
  ) {
    return {
      id_pedido,
      id_cliente: pedido.id_cliente,
      id_vendedor: pedido.id_vendedor,
      data: pedido.data,
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

const show = (id_pedido) => db.find((el) => el.id_pedido == id_pedido);

const update = (id_pedido, body) => {
  const index = db.findIndex((el) => el.id_pedido == id_pedido);
  const novo = model(body, parseInt(id_pedido));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_pedido) => {
  const index = db.findIndex((el) => el.id_pedido == id_pedido);
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
