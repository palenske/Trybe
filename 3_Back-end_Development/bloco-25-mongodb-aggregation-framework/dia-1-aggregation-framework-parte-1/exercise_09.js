db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["EM SEPARACAO", "ENTREGUE"] },
      dataVenda: {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31")
      },
    },
  },
  {
    $group: {
      _id: "$clienteId",
      total: {
        $sum: "$valorTotal"
      },
    },
  },
  {
    $sort: {
      total: -1
    },
  },
  {
    $limit: 10
  },
]);