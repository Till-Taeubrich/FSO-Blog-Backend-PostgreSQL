CREATE TABLE blogs (
	id SERIAL PRIMARY KEY,
  author TEXT,
  url TEXT NOT NULL,
  title TEXT NOT NULL,
  likes INTEGER DEFAULT 0
);

INSERT INTO blogs (author, url, title, likes) VALUES ('till', 'google', 'title', 1);
INSERT INTO blogs (author, url, title, likes) VALUES ('robin', 'facebook', 'titleTwo', 3);