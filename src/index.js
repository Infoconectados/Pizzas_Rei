const express = require("express");
const ingrediente_controller = require("./controllers/ingredientes.js");
const pizza_controller = require("./controllers/pizzas.js");
const endereco_controller = require("./controllers/endereco.js");
const cliente_controller = require("./controllers/cliente.js");
const entregador_controller = require("./controllers/entregador.js");
const entrega_controller = require("./controllers/entrega.js");
const vendedor_controller = require("./controllers/vendedor.js");
const pagamento_controller = require("./controllers/pagamento.js");
const pedidos_controller = require("./controllers/pedidos.js");
const app = express();
const port = 3000;

app.use(express.json());
//GERENCIAMENTO DE ingredienteS
app.post("/ingrediente", (req, res) => {
  const ingrediente = req.body;
  const code = ingrediente_controller.store(ingrediente);
  res.status(code).json();
});

app.get("/ingrediente", (req, res) => {
  const ingrediente = ingrediente_controller.index();
  res.json(ingrediente);
});

app.get("/ingrediente/:id", (req, res) => {
  const ingrediente = ingrediente_controller.show(req.params.id);
  res.json(ingrediente);
});

app.put("/ingrediente/:id", (req, res) => {
  const ingrediente = req.body;
  const code = ingrediente_controller.update(req.params.id, ingrediente);
  res.status(code).json();
});

app.delete("/ingrediente/:id", (req, res) => {
  ingrediente_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE ingredienteS
//GERENCIAMENTO DE Pizzas
app.post("/pizza", (req, res) => {
  const pizza = req.body;
  const code = pizza_controller.store(pizza);
  res.status(code).json();
});

app.get("/pizza", (req, res) => {
  const pizza = pizza_controller.index();
  res.json(pizza);
});

app.get("/pizza/:id", (req, res) => {
  const pizza = pizza_controller.show(req.params.id);
  res.json(pizza);
});

app.put("/pizza/:id", (req, res) => {
  const pizza = req.body;
  const code = pizza_controller.update(req.params.id, pizza);
  res.status(code).json();
});

app.delete("/pizza/:id", (req, res) => {
  pizza_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE Pizzas
//GERENCIAMENTO DE Endereco
app.post("/endereco", (req, res) => {
  const endereco = req.body;
  const code = endereco_controller.store(endereco);
  res.status(code).json();
});

app.get("/endereco", (req, res) => {
  const endereco = endereco_controller.index();
  res.json(endereco);
});

app.get("/endereco/:id", (req, res) => {
  const endereco = endereco_controller.show(req.params.id);
  res.json(endereco);
});

app.put("/endereco/:id", (req, res) => {
  const endereco = req.body;
  const code = endereco_controller.update(req.params.id, endereco);
  res.status(code).json();
});

app.delete("/endereco/:id", (req, res) => {
  endereco_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE Endereco
//GERENCIAMENTO DE Cliente
app.post("/cliente", (req, res) => {
  const cliente = req.body;
  const code = cliente_controller.store(cliente);
  res.status(code).json();
});

app.get("/cliente", (req, res) => {
  const cliente = cliente_controller.index();
  res.json(cliente);
});

app.get("/cliente/:id", (req, res) => {
  const cliente = cliente_controller.show(req.params.id);
  res.json(cliente);
});

app.put("/cliente/:id", (req, res) => {
  const cliente = req.body;
  const code = cliente_controller.update(req.params.id, cliente);
  res.status(code).json();
});

app.delete("/cliente/:id", (req, res) => {
  cliente_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE Cliente
//GERENCIAMENTO DE entregador
app.post("/entregador", (req, res) => {
  const entregador = req.body;
  const code = entregador_controller.store(entregador);
  res.status(code).json();
});

app.get("/entregador", (req, res) => {
  const entregador = entregador_controller.index();
  res.json(entregador);
});

app.get("/entregador/:id", (req, res) => {
  const entregador = entregador_controller.show(req.params.id);
  res.json(entregador);
});

app.put("/entregador/:id", (req, res) => {
  const entregador = req.body;
  const code = entregador_controller.update(req.params.id, entregador);
  res.status(code).json();
});

app.delete("/entregador/:id", (req, res) => {
  entregador_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE entregador

//GERENCIAMENTO DE entrega
app.post("/entrega", (req, res) => {
  const entrega = req.body;
  const code = entrega_controller.store(entrega);
  res.status(code).json();
});

app.get("/entrega", (req, res) => {
  const entrega = entrega_controller.index();
  res.json(entrega);
});

app.get("/entrega/:id", (req, res) => {
  const entrega = entrega_controller.show(req.params.id);
  res.json(entrega);
});

app.put("/entrega/:id", (req, res) => {
  const entrega = req.body;
  const code = entrega_controller.update(req.params.id, entrega);
  res.status(code).json();
});

app.delete("/entrega/:id", (req, res) => {
  entrega_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE entrega
//GERENCIAMENTO DE vendedor
app.post("/vendedor", (req, res) => {
  const vendedor = req.body;
  const code = vendedor_controller.store(vendedor);
  res.status(code).json();
});

app.get("/vendedor", (req, res) => {
  const vendedor = vendedor_controller.index();
  res.json(vendedor);
});

app.get("/vendedor/:id", (req, res) => {
  const vendedor = vendedor_controller.show(req.params.id);
  res.json(vendedor);
});

app.put("/vendedor/:id", (req, res) => {
  const vendedor = req.body;
  const code = vendedor_controller.update(req.params.id, vendedor);
  res.status(code).json();
});

app.delete("/vendedor/:id", (req, res) => {
  vendedor_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE vendedor
//GERENCIAMENTO DE pagamento

app.post("/pagamento", (req, res) => {
  const pagamento = req.body;
  const code = pagamento_controller.store(pagamento);
  res.status(code).json();
});

app.get("/pagamento", (req, res) => {
  const pagamento = pagamento_controller.index();
  res.json(pagamento);
});

app.get("/pagamento/:id", (req, res) => {
  const pagamento = pagamento_controller.show(req.params.id);
  res.json(pagamento);
});

app.put("/pagamento/:id", (req, res) => {
  const pagamento = req.body;
  const code = pagamento_controller.update(req.params.id, pagamento);
  res.status(code).json();
});

app.delete("/pagamento/:id", (req, res) => {
  pagamento_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE pagamento
//GERENCIAMENTO DE pedidos

app.post("/pedidos", (req, res) => {
  const pedidos = req.body;
  const code = pedidos_controller.store(pedidos);
  res.status(code).json();
});

app.get("/pedidos", (req, res) => {
  const pedidos = pedidos_controller.index();
  res.json(pedidos);
});

app.get("/pedidos/:id", (req, res) => {
  const pedidos = pedidos_controller.show(req.params.id);
  res.json(pedidos);
});

app.put("/pedidos/:id", (req, res) => {
  const pedidos = req.body;
  const code = pedidos_controller.update(req.params.id, pedidos);
  res.status(code).json();
});

app.delete("/pedidos/:id", (req, res) => {
  pedidos_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE pedidos

app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
