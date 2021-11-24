db.voos.findOne({ litrosCombustivel: { $exists: 1 } }, { _id: 0, vooId: 1 });
