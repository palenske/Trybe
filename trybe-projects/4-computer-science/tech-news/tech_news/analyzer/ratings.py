from tech_news.database import get_collection


# Requisito 10
def top_5_news():
    return [
        (news["title"], news["url"])
        for news in list(
            get_collection().aggregate(
                [
                    {
                        "$group": {
                            "_id": {"title": "$title", "url": "$url"},
                            "popularity": {
                                "$sum": {
                                    "$sum": [
                                        "$shares_count",
                                        "$comments_count",
                                    ]
                                }
                            },
                        }
                    },
                    {
                        "$project": {
                            "_id": 0,
                            "title": "$_id.title",
                            "url": "$_id.url",
                        },
                    },
                    {
                        "$sort": {
                            "popularity": -1,
                            "title": 1,
                        },
                    },
                    {
                        "$limit": 5,
                    },
                ]
            )
        )
    ]


# Requisito 11
def top_5_categories():
    return [
        category["category"]
        for category in list(
            get_collection().aggregate(
                [
                    {"$unwind": "$categories"},
                    {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
                    {"$project": {"_id": 0, "category": "$_id"}},
                    {"$sort": {"count": -1, "category": 1}},
                    {"$limit": 5},
                ]
            )
        )
    ]
