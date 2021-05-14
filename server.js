let express = require('express');
let app = express();





app.use('/static',express.static('static'));

app.listen(3000,()=>{
  console.log('http://localhost:3000')
})