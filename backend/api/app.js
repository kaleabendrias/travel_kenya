#!/usr/bin/node
// used to start the express api

const express = require("express");
const app = express();
const port = 3000;
const getAllPlaces = require("../database/allPlaces");
const findSpecificPlace = require("../database/specificPlace");

// home route
app.get('/', (req, res) =>{
	res.send("Hello world\n");
});

// all places route
app.get('/allPlaces', async (req, res)=>{
	res.send(await getAllPlaces());
});

// user to enter the place
app.get('/place', (req, res) => {
	res.send("Enter the request to be sent")
});

// specific place route
app.get('/place/:arg', async (req,res)=> {
	const place = await findSpecificPlace(req.params.arg);
	if (place)
	{
		res.send(place);
	}
	else{
		res.status(404).send("Place not found");
	};
});
	
// 404 error route
app.use((rea, res, next) => {
	res.status(404).send(
		'{"status": "404 error, page not found"}');
});

app.listen(port, ()=>{
	console.log("Server is up and running on http:localhost:3000");
});
