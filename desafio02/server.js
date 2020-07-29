const express = require ('express')
const nunjucks = require ('nunjucks') //nunjucks

const server = express()
const cartoes = require("./data")

server.use(express.static('public'))

//configuração da template engine com o nunjucks
server.set("view engine", "njk")

nunjucks.configure("views", { //views é a pasta
    express:server,
    autoescape: false,
    noCache: true
})
//---------------------------------------------

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://images.unsplash.com/flagged/photo-1576045771676-7ac070c1ce72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        name: "Easy Ambiental",
        description: 'Somos uma empresa especializada em solucionar Problemas Ambientais e tornar seu negócio sustentável de acordo com as <a href="https://www.ejeq.com.br/legislacao-ambiental/" target="_blanck">Normas Ambientais</a> atuais.',
        role: "Áreas de atuação:",
        areas: [
            {area: "Licenciamento Ambiental"},
            {area: "Auditorias e Diagnósticos Ambientais"},
            {area: "Plano de Gerenciamento Ambiental"}, 
            {area: "Análises de Qualidade de Água e de Ar"}
        ]
    }


    return res.render("about", { about }) //não precisa colocar .html pois o nunjucks vai fazer isso para mim
})

server.get("/atividades", function(req, res) {
    return res.render("atividades", {items: cartoes}) 
})

server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  const course = cartoes.find(cartao => cartao.id === id);

  if (!course) {
      return res.status(404).render("Course not-found")
  }

  return res.render("course", { item: course });
});

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(7000, function() {
    console.log("server is running")
})