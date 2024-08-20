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
