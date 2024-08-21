const db = [];
const ingrediente_controller = require("./ingredientes.js");
let nextId = 1;

const model = (pizza, id_pizza = nextId++) => {
  if (
    pizza.nome != undefined &&
    pizza.nome != "" &&
    Array.isArray(pizza.id_ingredientes) &&
    pizza.id_ingredientes.every(id => ingrediente_controller.show(id))
  ) {
    return {
      id_pizza,
      id_ingredientes: pizza.id_ingredientes, // Armazena os IDs dos ingredientes como um array
      nome: pizza.nome,
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

const show = (id_pizza) => db.find((el) => el.id_pizza == id_pizza);

const update = (id_pizza, body) => {
  const index = db.findIndex((el) => el.id_pizza == id_pizza);
  const novo = model(body, parseInt(id_pizza));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};

const destroy = (id_pizza) => {
  const index = db.findIndex((el) => el.id_pizza == id_pizza);
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
