const express = require ('express');
const app = express();

app.get('/', (req, res) => 
	res.send('server working')
);

app.listen(3004, ()=>console.log('Listening on port 3004!'))