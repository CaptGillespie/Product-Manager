const Pets = require('./models')

const controllers ={

    createRestaurant: (req, res) => {
        Pets.create(req.body)
            .then(data=> res.json ({info: data, msg:'success'}))
            .catch(err=> res.json({info: err, msg: 'ERROR!'}))
    },

    allRestaurants: (req, res) =>{
        Pets.find()
            .then(data=> res.json ({info: data, msg:'success'}))
            .catch(err=> res.json({info: err, msg: 'ERROR!'}))
    },

    oneRestaurant: (req, res) =>{
        Pets.findById(req.params.id)
        .then(data=> res.json ({info: data, msg:'success'}))
        .catch(err=> res.json({info: err, msg: 'ERROR!'}))
    },

    updateRestaurant: (req, res) => {
        Pets.findByIdAndUpdate(req.params.id, req.body, {runValidators:true})
            .then(data=> res.json ({info: data, msg:'success'}))
            .catch(err=> res.json({info: err, msg: 'ERROR!'}))
    },

    deleteRestaurant: (req, res) =>{ console.log("hit the delete route")
        Pets.remove({_id: req.params.id})
        .then(data=> res.json ({info: data, msg:'deleted!'}))
        .catch(err=> res.json({info: err, msg: 'ERROR!'}))
        },



        // OneToManyRoute************
    addReview: (req,res)=>{
        Pets.findOneAndUpdate({_id:req.params.id}, {$push:{review: req.body}})
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    },

    deleteReview: function deletereview(req,res){
        Authors.findOneAndUpdate(
            {_id:req.params.id},
            {$pull: {review:{_id:req.params.qid}}}
            )
        .then (data=> res.json({message:"success", author:data}))
        .catch(err => res.json({message:"failed", errors:err}))
    }
}

module.exports = controllers