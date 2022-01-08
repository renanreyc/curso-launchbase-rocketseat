const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')

exports.index =  function(req, res) {
    return res.render("instructors/index", { instructors: data.instructors })
}


exports.create = function (req, res) {
    return res.render("instructors/create")
}


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
        }
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

exports.show = function(req,res) {

    //req.params.id = /:id/:member > mandar direto na 'url'
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        create_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.create_at),
    }

    return res.render("instructors/show", { instructor })

}

exports.edit = function(req,res) {
    //req.params.id = /:id/:member > mandar direto na 'url'
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return id == instructor.id
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    const  instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth).iso
    }

    return res.render('instructors/edit',{instructor})
}

exports.put = function(req, res) {
    const { id } = req.body
    let index = 0

    const foundInstructor = data.instructors.find(function(instructor, foundIndex){
        if (id == instructor.id){
            index = foundIndex
        }
        return true
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.instructors[index] = instructor
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write error!")

        return res.redirect(`/instructors/${id}`)
    })
}

exports.delete = function(req, res) {
    const { id } = req.body

    const filteredInstructors = data.instructors.filter(function(instructor){
        return instructor.id != id
    })

    data.instructors = filteredInstructors
    fs.writeFile("data.json", JSON.stringify(data,null,2), function(err){
        if(err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })
}