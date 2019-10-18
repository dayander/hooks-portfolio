const express = require("express")
const handleRender = require("./requestHandler")
const path = require('path')
const httpProxy = require('http-proxy')
const apiProxy = httpProxy.createProxyServer({
    target:"http://localhost:3001"
});

let  app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));




app.use('/api', function(req, res){

    apiProxy.web(req, res);
});




app.get('*', handleRender)

const port = process.env.PORT || 3000
app.listen(port,  () => console.log("Static Server listening on port 3000!"));


module.exports = app