db.movies.updateOne(
  { title: "Batman" },
  {
    $addToSet: {
      category: "superhero"
    }
  }
);
