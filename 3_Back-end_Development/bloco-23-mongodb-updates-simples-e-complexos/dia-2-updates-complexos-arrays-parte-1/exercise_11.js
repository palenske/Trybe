db.movies.updateMany(
  { title: "Batman" },
  {
    $push: {
      "cast.$[batman].actor": "Christian Bale",
      "cast.$[alfred].actor": "Michael Caine",
      "cast.$[coringa].actor": "Heath Ledger",
    }
  },
  {
    arrayFilters: [
      { "batman.character": "Batman" },
      { "alfred.character": "Alfred" },
      { "coringa.character": "Coringa" }
    ]
  }
);
