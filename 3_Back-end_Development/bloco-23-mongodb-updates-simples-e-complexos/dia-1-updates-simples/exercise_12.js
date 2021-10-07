db.movies.updateMany(
  {},
  { $unset: { budget: {}, estimatedBudget: {} } }
);