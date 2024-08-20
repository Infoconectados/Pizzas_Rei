const db = [];
let nextID = 1;
const model = (endereco, id_endereco = nextID++) => {
  if (endereco.rua != undefined && endereco.rua != "") {
    return {
      id_endereco,
      rua: endereco.rua,
      numero: endereco.numero,
      bairro: endereco.bairro,
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

const show = (id_endereco) => db.find((el) => el.id_endereco == id_endereco);

const update = (id_endereco, body) => {
  const index = db.findIndex((el) => el.id_endereco == id_endereco);
  const novo = model(body, parseInt(id_endereco));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_endereco) => {
  const index = db.findIndex((el) => el.id_endereco == id_endereco);
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
