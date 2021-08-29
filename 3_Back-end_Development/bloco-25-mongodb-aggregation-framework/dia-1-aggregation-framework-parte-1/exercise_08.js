db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["EM SEPARACAO", "ENTREGUE"] }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      total: {
        $sum: "$valorTotal"
      }
    }
  },
  {
    $sort: {
      total: -1
    }
  },
  {
    $limit: 5
  },
]);
