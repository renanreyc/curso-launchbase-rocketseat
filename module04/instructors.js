const fs = require('fs')
const data = require('./data.json')
// create
exports.post =  function(req, res) {
    // req.query.id

    //  req.body
    //{"avatar_url":"http://google.com","name":"RENAN REY COSTA RODRIGUES","birth":"1993-03-20","gender":"M","services":"crossfit, musculação"}

    //["avatar_url","name","birth","gender","services"]
    const keys = Object.keys(req.body)

    for( key of keys) {
        // req.body.avatar_url (key) == ""
        if (req.body[key] =="") {
        return res.send('Please, fill all fields!')
        } //se tiver apenas uma linha após o if pode deixar sem as "{}"
    }

    let { avatar_url, birth, name, services, gender } = req.body

    birth = Date.parse(birth)
    const create_at = Date.now()
    const id = Number(data.instructors.length + 1)

    // [] -> [{...}]
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        create_at
    }) //[{...}] -> [{...}, {...}]

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")
    
        return res.redirect("/instructors")
    })

    // return res.send(req.body)
}



// update

//delete