// Importing the packages required for the project.

const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

// Used for sending the Json Data to Node API
app.use(bodyparser.json());

// Connection String to Database
var mysqlConnection = mysql.createConnection({
	host : '******',
	user : '******',
	password : '******',
	database : '******',
	multipleStatements : true
});

// To check whether the connection has succeded or Failed while running the project in the console.
mysqlConnection.connect((err) => {
	if(!err) {
		console.log("DB Connection succesful");
	}
	else{
		console.log("DB connection failed \n Error :" + JSON.stringify(err,undefined,2));
	}
});

// To Run the server with Port Number
app.listen(3000,
()=> console.log("Server running at http://m23c.ch:3000"));

// CRUD Methods
// Get all Objects
app.get('/objects',(req,res)=>{
	mysqlConnection.query('SELECT * FROM Objects',(err,rows,fields)=>{
	if(!err)
	res.send(rows);
	else
		console.log(err);
});
});

// Get the Object Data based on Id
app.get('/objects/:id',(req,res)=>{
	mysqlConnection.query('SELECT * FROM Objects WHERE id = ?',
[req.params.id],(err,rows,fields)=>{
	if(!err)
	res.send(rows);
	else
		console.log(err);
});
});

// Get the calculated comparison values
app.get('/values/:c',(req,res)=>{
	let x = req.params.c;
	let ycar = 100000 * x / 25;
	let zcar = ycar.toFixed(2).toString();
	let ymeat = 1000 * x / 13.3;
	let zmeat = ymeat.toFixed(2).toString();
	let ypetrol = 1000 * x / 2.3;
	let zpetrol = ypetrol.toFixed(2).toString();
	res.send('With the accumulated CO2 you could drive '+zcar+' meters every hour.<br>With the accumulated CO2 you could eat '+zmeat+' grams of Beef every hour.<br>With the accumulated CO2 you could burn '+zpetrol+'ml of petrol.');
});


// Add new Object
app.post('/objects', function(request, response){
	var objname = request.body.Name;
	var objvalue = request.body.Value;
	// Bulk insert using nested array [ [a,b],[c,d] ] will be flattend to (a,b),(c,d)
	mysqlConnection.query('INSERT INTO Objects (Name,Value) VALUES (?,?)', [objname,objvalue],
	(err,rows,field)=>{
	if(!err)
		response.send('Success')
	else
		response.send('Error')
});
});

