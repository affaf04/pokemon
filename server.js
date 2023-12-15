const express = require('express')
const app = express()
const pkmns = require('./models/pokemon')


app.set("view engine","jsx")
// --> Gives ViewEngine
app.engine("jsx", require("express-react-views").createEngine())
// --> Initializes ViewEngine

app.use(express.urlencoded({extended:false}));
// --> Parse URLencoded responses [req.body*]

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
// --> Intercept reqRes proccess and manage dataFlow
// ---------------------------------[Middleware]


app.get('/pokemon', (req,res)=>{
    res.render('Index', {
        pokemon: pkmns
    })
})
// ----------------------------------[Index (R)]




app.get('/pokemon/:indexOfPokemonArray', (req,res)=>{
    res.render('Show',{
        pokemon: pkmns[req.params.indexOfPokemonArray]
    })
})
// ----------------------------------[Show]

app.listen(3000,()=>{
    console.log("YerrOn3k")
}) 