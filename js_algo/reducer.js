const data = [{name:'Brahima'},{name:'Alban'},{name:'Christian'}];

const contains_I = data => 
	data.reduce((acc, cur)=>
{
        acc[cur.name] = cur['name'].includes('i');
        return acc ;
},{});

console.log(JSON.stringify(contains_I(data)));

