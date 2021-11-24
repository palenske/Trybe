db.movies.updateOne(
  { title: "Home Alone"},
  {
    $set: {
      "cast.$[index].character": "Marv"
    }
  },
  {
    arrayFilters: [{ "index.actor": "Daniel Stern" }]
  }
);
