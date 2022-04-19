const express = require("express");
const fs =require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;
const removeExt = (filename) =>{
    return filename.split('.').shift()
}

const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExt(file)
    if(name !== 'index'){
        router.use(`/${name}`, require(`./${file}`))
    }

})

//console.log({a})

module.exports = router