import mysql.connector

plantdb = mysql.connector.connect(
    host="localhost",
    user="planter",
    password="123456",
    database="plantapp"
)

def checker(x):
    print(list1[x])
    a = input("To approve, enter y, to deny, enter n\n")
    if a == 'y':
        sql = 'INSERT INTO Objects (Name,Value) VALUES (%s,%s)'
        val = (list1[x][1], list1[x][2])
        cur.execute(sql, val)
        plantdb.commit()
        sql = "DELETE FROM CheckObj WHERE id = %s"
        val = (list1[x][0],)
        cur.execute(sql,val)
        plantdb.commit()
    else:
        sql = "DELETE FROM CheckObj WHERE id = %s"
        val = (list1[x][0],)
        cur.execute(sql,val)
        plantdb.commit()

        

cur = plantdb.cursor()

cur.execute("SELECT * FROM CheckObj")
result = cur.fetchall()
list1 = []
for x in result:
    list1.append(x)

for i in range(0, len(list1)):
    checker(i)
print('ALL operations completed')
