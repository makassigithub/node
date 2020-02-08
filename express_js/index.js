const app = require('express')();


app.get('/',(req,res)=>{
	()=>console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
	res.send('Hello from express server!\n')
});

app.get('/par/:id',(req,res)=>{
	//http://localhost:4000/par/2
	res.send(`The param is: ${req.params.id}`);
});

app.get('/que',(req,res)=>{
	//http://localhost:4000/que?id=2
	res.send(`The query is: ${req.query.id}`);
});



app.listen('4000',console.log(`Running in: ${process.env.NODE_ENV} mode`));

