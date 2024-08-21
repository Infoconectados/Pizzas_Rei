const db = [];
const endereco_controller = require("./endereco.js");
let nextId = 1;

const model = (status, id_status = nextId++) => {
  if (status.nome != undefined && status.nome != "") {
    return {
      id_status,
      nome: status.nome,
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

const show = (id_status) => db.find((el) => el.id_status == id_status);

const update = (id_status, body) => {
  const index = db.findIndex((el) => el.id_status == id_status);
  const novo = model(body, parseInt(id_status));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_status) => {
  const index = db.findIndex((el) => el.id_status == id_status);
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
