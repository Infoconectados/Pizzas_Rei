const db = [];
let nextID = 1;
const model = (ingrediente, id_ingrediente = nextID++) => {
  if (ingrediente.nome != undefined && ingrediente.nome != "") {
    return {
      id_ingrediente,
      nome: ingrediente.nome,
      validade: ingrediente.validade,
      quantidade: ingrediente.quantidade,
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

const show = (id_ingrediente) =>
  db.find((el) => el.id_ingrediente == id_ingrediente);

const update = (id_ingrediente, body) => {
  const index = db.findIndex((el) => el.id_ingrediente == id_ingrediente);
  const novo = model(body, parseInt(id_ingrediente));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_ingrediente) => {
  const index = db.findIndex((el) => el.id_ingrediente == id_ingrediente);
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
