

function verifieMe(param){
	console.log('initial value'+ JSON.stringify(param));
	param = {};
}

function verifieMe2(param){ 
        console.log('initial value'+ JSON.stringify(param));
        param.a = 1;
}

var data = {b:2, c:1};
verifieMe(data);
console.log(JSON.stringify(data));
verifieMe2(data);
console.log(JSON.stringify(data));
