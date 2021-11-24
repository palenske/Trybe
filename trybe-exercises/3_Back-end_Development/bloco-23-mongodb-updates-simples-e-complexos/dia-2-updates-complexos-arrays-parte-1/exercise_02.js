db.movies.updateOne(
  { title: "Batman" },
  {
    $addToSet: {
      category: {
        $each: ["villain", "comic-based"]
      }
    }
  }
);
