const express = require ('express')
const nunjucks = require ('nunjucks') //nunjucks

const server = express()

server.use(express.static('public'))

//configuração da template engine com o nunjucks
server.set("view engine", "njk")

nunjucks.configure("views", { //views é a pasta
    express:server
})
//---------------------------------------------

server.get("/", function(req, res) {
    return res.render("about") //não precisa colocar .html pois o nunjucks vai fazer isso para mim
})

server.get("/atividades", function(req, res) {
    return res.render("atividades") 
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(7000, function() {
    console.log("server is running")
})