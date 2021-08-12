const express = require ('express')
const Product = require('../models/product.js')
const router = express.Router()
const productSeed = require('../models/productSeed.js')

//=======SEED=======//
router.get('/product/seed', (req, res)=>{
   Product.create(
      [
         {
            img: '',
            name: 'Stapler',
            price: '$12.97',
         },
         {
            img: '',
            name: 'Paper',
            price: '$20.95',
         },
         {
            img: '',
            name: 'Pens',
            price: '$5.99',
         }
      ],
      (error, createdProducts) =>{
         res.redirect('/product')
      }
   )
})

//=======INDEX=======//
router.get('/', (req, res)=>{
   Product.find({}, (error, allProducts)=>{
      res.render(
         'index.ejs',
         {
            product:allProducts
         }
      )
   })
})

//=======NEW=======//
//=======CREATE(POST)=======//
//=======EDIT(Prt1)=======//
//=======EDIT(Prt2)=======//
//=======SHOW=======//
//=======DELETE=======//

module.export = router
