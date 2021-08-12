//========Dependencies=======//

 const express = require('express');


//======Configuration=======//
// require('dotenv').config()
const app = express();
// const db = mongoose.connection;

//==========PORT==========//
const PORT = 3004;

//=========DATABASE========//

//=======MIDDLEWARE========//
// app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.set('view engine', 'ejs')
//=========ROUTES-CONTROLLERS=========//
const productController = require('./controllers/productCont.js');
app.use('/product', productController);

//=========ROUTES=========//
app.get('/', (req, res) =>{
   res.redirect('/product')
})

// app.get('/', (req, res)=>{
//    res.send('hello world')
// })
//=========LISTENER========//
app.listen(PORT, () => console.log('listening on port', PORT));
//===========MONGOOSE CONNECTION=======//
