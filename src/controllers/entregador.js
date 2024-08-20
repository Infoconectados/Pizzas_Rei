const db = [];
let nextID = 1;
const model = (entregador, id_entregador = nextID++) => {
  if (entregador.nome != undefined && entregador.nome != "") {
    return {
      id_entregador,
      nome: entregador.nome,
      hora_saida: entregador.hora_saida,
      hora_retorno: entregador.hora_retorno,
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

const show = (id_entregador) =>
  db.find((el) => el.id_entregador == id_entregador);

const update = (id_entregador, body) => {
  const index = db.findIndex((el) => el.id_entregador == id_entregador);
  const novo = model(body, parseInt(id_entregador));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_entregador) => {
  const index = db.findIndex((el) => el.id_entregador == id_entregador);
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
