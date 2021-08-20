db.movies.updateOne(
  { title: "Home Alone" },
  {
    $currentDate: {
      lastUpdated: { $type: "timestamp" },
    }
  }
);
