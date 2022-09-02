const Squat = require('../models/squat');


module.exports = {
  index: index,
  show,
  new: newSquat,
  create,
  delete: deleteSquat,
  edit,
  update
};

function index(req, res, next) {
 
  console.log(req.time)
  res.render("squat/index", { 
    squats: Squat.getAll(), 
    time: req.time 
  });
}

function show(req, res) {
  res.render('squat/show', { squat: Squat.getOne(req.params.id) })
}

function newSquat(req, res) {
  res.render('squat/new', {squat: null})
}

function create(req, res) {
  console.log(req.body)
  
  Squat.create(req.body)
  
  res.redirect('/squats') 
}

function deleteSquat(req, res) {
  Squat.deleteOne(req.params.id)
  res.redirect('/squats')
}

function edit(req, res) {
  res.render("squats/new", { squat: Squat.getOne(req.params.id) });
}

function update(req, res) {
  Squat.updateOne(req.params.id, req.body)
  res.redirect(`/squats/${req.params.id}`)
}




function index(req, res, next) {
      res.render('squats/index', {
        user,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    };
  
  