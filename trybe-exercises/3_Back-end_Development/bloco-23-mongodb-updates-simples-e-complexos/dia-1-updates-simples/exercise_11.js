db.movies.updateMany(
  {},
  { $set: { sequels: 0} }
);