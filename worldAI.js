import Database from "better-sqlite3";

export const db = new Database("memory.db");

db.prepare(`
CREATE TABLE IF NOT EXISTS memory (
  id INTEGER PRIMARY KEY,
  role TEXT,
  content TEXT,
  time INTEGER
)
`).run();

export function remember(role, content) {
  db.prepare(
    "INSERT INTO memory (role, content, time) VALUES (?, ?, ?)"
  ).run(role, content, Date.now());
}

export function recall(limit = 10) {
  return db.prepare(
    "SELECT role, content FROM memory ORDER BY time DESC LIMIT ?"
  ).all(limit).reverse();
}
