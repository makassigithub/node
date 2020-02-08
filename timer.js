const oneFunction = delay => {
	console.log("Hello after " +delay+ " second");
        setTimeout(()=>console.log("Hello after 8 second"),delay*1000);
}

setTimeout(oneFunction,4*100,4);

