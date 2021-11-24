db.voos.findOne({ $and: [
    { litrosCombustivel: { $exists: 1, $lte: 600 } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  ] }, { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });
