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
