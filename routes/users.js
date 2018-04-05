const express = require('express')
const router = express.Router()
const db = require('../models/db')
const formidable = require('formidable')
const fs = require('fs')
const exec = require('child_process').exec
let file = null

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

// Uploads the user given file and populates the
// table in the UI with the data
router.post('/upload_file', function (req, res) {
  const form = formidable.IncomingForm()

  form.parse(req, function (err, fields, files) {
    if (files.file.name.includes('.csv')) {
      file = files.file.path
      const cmd = 'sqlite3 studentmarks.sqlite -separator "," ".import ' +
        files.file.path + ' users"'
      exec(cmd, function (err, stdout, stderr) {
        if (stdout !== '')
          console.log('stdout: ' + stdout)
        if (stderr !== '')
          console.log('stderr: ' + stderr)
        if (err !== null)
          console.log('exec error: ' + err)
        else
          res.json({success: true, msg: 'File uploaded'})
      })
    }
  })
})

router.get('/export_file', function (req, res) {
  // Exporting to a file
  const cmd = 'sqlite3 -header -csv studentmarks.sqlite "select * from users;" > users.csv'
  exec(cmd, function (err, stdout, stderr) {
    if (stdout !== '')
      console.log('stdout: ' + stdout)
    if (stderr !== '')
      console.log('stderr: ' + stderr)
    if (err !== null)
      console.log('exec error: ' + err)

    // Reading that file and sending it to the user
    file = process.cwd() + '/users.csv'
    fs.readFile(file, 'utf8', function (err, data) {
      if (err)
        console.log(err)
      else {
        let fileName = ''
        const slashIndex = file.lastIndexOf('/')
        if (slashIndex !== -1)
          fileName = file.substring(slashIndex + 1)
        res.json({
          success: true,
          msg: 'Exported data to users.csv',
          fileName: fileName,
          filePath: file.substring(0, slashIndex),
          fileContents: data
        })
      }

      // Deleting that file since the data is
      // already sent to the users
      fs.unlink(file, function (err) {
        if (err) throw err
      })
    })
  })
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
  db.users.updatehw1(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw1'})
    else
      res.json(user)
  })
})

// Update hw2
router.patch('/:uid/section_hw2', function (req, res) {
  db.users.updatehw2(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw2'})
    else
      res.json(user)
  })
})

// Update hw3
router.patch('/:uid/section_hw3', function (req, res) {
  db.users.updatehw3(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw3'})
    else
      res.json(user)
  })
})

// Update hw4
router.patch('/:uid/section_hw4', function (req, res) {
  db.users.updatehw4(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw4'})
    else
      res.json(user)
  })
})

// Update hw5
router.patch('/:uid/section_hw5', function (req, res) {
  db.users.updatehw5(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw5'})
    else
      res.json(user)
  })
})

// Update hw6
router.patch('/:uid/section_hw6', function (req, res) {
  db.users.updatehw6(req.params.uid, req.body.score, function (err, user) {
    if (err || !user)
      res.json({success: false, msg: 'Could not update user\'s score for hw6'})
    else
      res.json(user)
  })
})

module.exports = router
