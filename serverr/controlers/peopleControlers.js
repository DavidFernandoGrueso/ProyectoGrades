People = require('./../Models/PeopleModel')

exports.index = function(req, res) {
    People.get(function(err, data){
    if(err){
        res.json({ status: 500, message: err})
    }
    res.json({ status:200, message: data})
} )
}

exports.create = function(req, res){
 var data = new People()
 data.nombres = req.body.nombres
 data.apellidos = req.body.apellidos
 data.save(function(err){
    if(err)
        res.json({ status:500, message: err})
        res.json({ status:200, message: data})
 })
}

exports.view = function(req, res){
    People.findById(req.params._id, function(err, data){
    if(err)
        res.json({ status:500, message: err})
        res.json({ status:200, message: data})  
    })
}


exports.update = function(req, res){
    People.findById(req.params._id, function(err, data){
        if(err)
            res.json({ status:500, message: err})
    var data = new People()
    data.nombres = req.body.nombres
    data.apellidos = req.body.apellidos
    data.save(function(err){
       if(err)
           res.json({ status:500, message: err})
           res.json({ status:200, message: data})
     })
    })
   } 

   exports.delete = function(req, res){
    People.remove({
        _id: req.params
    }, function(err){
    if(err)
           res.json({ status:500, message: err})
           res.json({ status:200})
     })
   } 