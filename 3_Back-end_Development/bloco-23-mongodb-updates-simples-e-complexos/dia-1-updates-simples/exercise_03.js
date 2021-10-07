db.movies.updateOne(
  { title: "Home Alone" },
  {
    $set: {
      imdbRating: 5.5,
      budget: 15
    }
  }
);