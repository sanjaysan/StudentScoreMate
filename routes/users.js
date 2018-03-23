const express = require('express')
const router = express.Router()
const db = require('../models/db')
const formidable = require('formidable')
const sys = require('sys')
const exec = require('child_process').exec

/* GET users listing. */
// Loads the table with all students
// in the home page
router.get('/', function (req, res) {
  db.users.findAll({}).then(function (users) {
    res.json(users)
  })
})

// Create a user
router.post('/', function (req, res) {
  const newUser = {
    id: req.body.id,
    name: req.body.name,
    sis_user_id: req.body.sis_user_id,
    sis_login_id: req.body.sis_login_id,
    section_hw1: req.body.section_hw1,
    section_hw2: req.body.section_hw2,
    section_hw3: req.body.section_hw3,
    section_hw4: req.body.section_hw4,
    section_hw5: req.body.section_hw5,
    section_hw6: req.body.section_hw6
  }

  db.users.createUser(newUser, function (err, user) {
    if (err)
      res.json({success: false, msg: 'Cannot create user'})
    else
      res.json(user)
  })
})

router.post('/upload_file', function (req, res) {
  const form = formidable.IncomingForm()

  form.parse(req, function (err, fields, files) {
    if (files.file.name.includes('.csv')) {
      const cmd = 'sqlite3 studentmarks.sqlite -separator "," ".import ' +
        files.file.path + ' users"'
      exec(cmd, function (err, stdout, stderr) {
        if (stdout !== '')
          console.log('stdout: ' + stdout)
        if (stderr !== '')
          console.log('stderr: ' + stderr)
        if (err !== null)
          console.log('exec error: ' + err)
      })
    }
  })

  res.sendStatus(200)
})

router.get('/export_file', function (req, res) {
  const cmd = 'sqlite3 -header -csv studentmarks.sqlite "select * from users;" > users.csv'
  exec(cmd, function (err, stdout, stderr) {
    if (stdout !== '')
      console.log('stdout: ' + stdout)
    if (stderr !== '')
      console.log('stderr: ' + stderr)
    if (err !== null)
      console.log('exec error: ' + err)
  })
  res.json({success: true, msg: 'Exported data to users.csv'})
})

router.get('/:uname([A-Za-z ]+)', function (req, res) {
  db.users.getUserByName(req.params.uname, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'No user information'})
    else
      res.json(user)
  })
})

// Update hw1
router.patch('/:uid/section_hw1', function (req, res) {
  console.log(req.body)
  db.users.updatehw1(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw1'})
    else
      res.json(user)
  })
})

// Update hw2
router.patch('/:uid/section_hw2', function (req, res) {
  console.log(req.body)
  db.users.updatehw2(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw2'})
    else
      res.json(user)
  })
})

// Update hw3
router.patch('/:uid/section_hw3', function (req, res) {
  console.log(req.body)
  db.users.updatehw3(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw3'})
    else
      res.json(user)
  })
})

// Update hw4
router.patch('/:uid/section_hw4', function (req, res) {
  console.log(req.body)
  db.users.updatehw4(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw4'})
    else
      res.json(user)
  })
})

// Update hw5
router.patch('/:uid/section_hw5', function (req, res) {
  console.log(req.body)
  db.users.updatehw5(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw5'})
    else
      res.json(user)
  })
})

// Update hw6
router.patch('/:uid/section_hw6', function (req, res) {
  console.log(req.body)
  db.users.updatehw6(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw6'})
    else
      res.json(user)
  })
})

module.exports = router
