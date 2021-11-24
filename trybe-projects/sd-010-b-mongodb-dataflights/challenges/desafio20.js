db.voos.findOne({ rtk: { $exists: 0 } }, { _id: 0, vooId: 1 });
