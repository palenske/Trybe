db.voos.find({ $and: [{ ano: 2017 }, { "empresa.nome": "GOL" }] },
{
  _id: 0,
  vooId: 1,
  "empresa.nome": 1,
  "aeroportoOrigem.nome": 1,
  "aeroportoDestino.nome": 1,
  mes: 1,
  ano: 1 }).limit(10);
