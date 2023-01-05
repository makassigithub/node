const app = require('express')();


app.get('/',(req,res)=>{
	()=>console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
	console.log('ip: '+ req.ip);
	console.log('ips: '+ req.ips);
	console.log('ibaseUrl: '+ req.baseUrl);
	console.log('host: '+ req.host);
	console.log('body: '+ req.body);
	console.log('cookies: '+ req.cookies);
	console.log('headers: '+ req.headers);
	console.log('hostname: '+ req.hostname);
	console.log('method: '+ req.method);
	console.log('path: '+ req.path);
	console.log('url: '+ req.url);
	console.log('query: '+ JSON.stringify(req.query));
	console.log('param: '+ JSON.stringify(req.param));
	console.log('params: '+ JSON.stringify(req.params));
	console.log('data: '+ JSON.stringify(req.data));
	res.send('Hi there!');
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

