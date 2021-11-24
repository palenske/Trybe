db.voos.deleteMany({ $and: [
    { "empresa.nome": "GOL" },
    { "passageiros.pagos": { $lte: 10, $gte: 5 } },
  ] });
// "deletedCount": 74
