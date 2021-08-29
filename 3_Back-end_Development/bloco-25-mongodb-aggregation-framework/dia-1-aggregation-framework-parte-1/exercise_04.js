db.clientes.aggregate([
  {
    $match: {
      "endereco.uf": "SC"
    },
  },
  {
    $group: {
      _id: "$endereco.uf",
      total: { $sum: 1 }
    },
  },
]);