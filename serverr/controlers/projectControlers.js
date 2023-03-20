Project = require('./../Models/ProjectModel')
People = require('./../Models/PeopleModel')

exports.index = function(req, res) {
    Project.get(function(err, data){
    if(err){
        res.json({ status: 500, message: err})
    }
} )
}

exports.create = function(req, res){
 var data = new Project()
 data.titulo = req.body.titulo
 data.alumno = req.body.alumno
 data.save(function(err){
    if(err)
        res.json({ status:500, message: err})
        res.json({ status:200, message: data})
 })
}

exports.view = function(req, res){
    Project.findById(req.params, function(err, data){
    if(err)
        res.json({ status:500, message: err})
        res.json({ status:200, message: data})  
    })
}



   exports.delete = function(req, res){
    Project.remove({
        _id: req.params.People
    }, function(err){
    if(err)
           res.json({ status:500, message: err})
           res.json({ status:200})
     })
   } 