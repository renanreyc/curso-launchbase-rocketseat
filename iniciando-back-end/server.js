const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get("/", function(req, res) {

    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/64597226?s=460&u=1a81814b9cdb2772f2bb944f6050bcfe398379e4&v=4",
        name: "Renan Rey",
        role: "Desenvolvedor Júnior",
        description: 'Programador full-stack, focado em trazer o melhor portfólio profissional. Aluno da <a href="https://rocketseat.com.br" target="_blanck">Rocketseat</a>',
        links: [
            { name: "Github", url: "https://github.com/renanreyc" },
            { name: "Instagram", url: "https://www.instagram.com/renanreyr/?hl=pt-br" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/renan-rodrigues-21991612a/" }
            
        ]
    }


    return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {

    return res.render("portfolio", { items: videos})
})

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})

server.listen(5000, function() {
    console.log("server is running")
})