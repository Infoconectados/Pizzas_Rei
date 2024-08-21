const db = [];
const cliente_controller = require("./cliente.js");
const vendedor_controller = require("./vendedor.js");
let nextId = 1;

const model = (pagamento, id_pagamento = nextId++) => {
  if (
    pagamento.id_cliente != undefined &&
    pagamento.id_vendedor != undefined &&
    vendedor_controller.show(pagamento.id_vendedor) &&
    cliente_controller.show(pagamento.id_cliente)
  ) {
    return {
      id_pagamento,
      id_vendedor: pagamento.id_vendedor,
      id_cliente: pagamento.id_cliente,
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

const show = (id_pagamento) => db.find((el) => el.id_pagamento == id_pagamento);

const update = (id_pagamento, body) => {
  const index = db.findIndex((el) => el.id_pagamento == id_pagamento);
  const novo = model(body, parseInt(id_pagamento));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_pagamento) => {
  const index = db.findIndex((el) => el.id_pagamento == id_pagamento);
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
