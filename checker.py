import mysql.connector

mydb = mysql.connector.connect(
	host="localhost",
	user="planter",
	password="123456",
	database="plantapp"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM CheckObj")
myresult = mycursor.fetchall()

for x in myresult:
	print(x[1])
