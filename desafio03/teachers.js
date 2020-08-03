const fs = require('fs')
const data = require("./data.json")
// create (post)
exports.post = function(req,res) {

    const keys = Object.keys(req.body)

    for ( key of keys ) {
        if (req.body[key] == "") {
        
        return res.send('Please, fill all fields')
        }
    }

    let { avatar_url, name, birth, level, type, subjects } = req.body
    // deixo como let pq o birth eu vou alterar aqui embaixo

    birth = Date.parse(req.body.birth)
    created_at = Date.now()
    id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        level,
        type,
        subjects,
        created_at,
    }) 

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("Write File error!")
        
        return res.redirect("/teachers")
    })

}

