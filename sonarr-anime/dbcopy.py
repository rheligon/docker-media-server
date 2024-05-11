import sqlite3

conn = sqlite3.connect('sonarr1.db')
conn_2 = sqlite3.connect('sonarr.db')

cur = conn.cursor()
cur_2 = conn_2.cursor()

rows = cur.execute('SELECT * FROM CustomFormats').fetchall()

# cur_2.executemany("INSERT INTO CustomFormats VALUES (?, ?, ?, ?)", rows)

cur_2.execute("DELETE FROM CustomFormats WHERE 1=1")
cur_2.execute("UPDATE sqlite_sequence SET seq=0 WHERE name='CustomFormats'")

conn_2.commit()