CREATE TABLE IF NOT EXISTS Restaurants(
    id TEXT PRIMARY KEY NOT NULL,
    rating INTEGER CHECK (rating >= 0 and rating <= 5),
    name TEXT,
    site TEXT,
    email TEXT,
    phone TEXT,
    street TEXT,
    city TEXT,
    state TEXT,
    lat FLOAT,
    lng FLOAT
);