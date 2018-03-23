import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import AddUser from './AddUser'

class App extends Component {

  state = {
    isNewUser: false,
    displayConfirmation: false,
    searchResults: [],
    selectedRowIndex: '',
    users: []
  }

  componentWillMount () {
    this.getUsers()
  }

  getUsers() {
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios.get('/users/', headers).then(res => {
      this.setState({
        users: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  searchStudentByName (e) {
    const name = e.target.value.toLowerCase()
    this.setState({
      searchResults: this.state.users.filter(
        user => user.name.toLowerCase().includes(name))
    })
  }

  saveScore (e) {
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const update = {
      score: e.target.value
    }

    axios.patch('/users/' + this.state.selectedRowIndex + '/' +
      e.target.name,
      update, headers).then(res => {
    }).catch(err => {
      console.log(err)
    })
  }

  getFile (e) {
    const filePath = e.target.value
    const index = filePath.lastIndexOf('\\')
    if (index !== -1)
      document.getElementById('fileName').innerHTML = filePath.substring(index + 1)
    else
      document.getElementById('fileName').innerHTML = filePath

    const inputFile = e.target.files[0]
    if (inputFile !== undefined) {
      let formData = new FormData()
      formData.append('file', inputFile)
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      axios.post('/users/upload_file', formData, headers).then(res => {
        this.getUsers()
      }).catch(err => {
        console.log(err)
      })
    }
  }

  handleClick (e) {
    let elt = e.target
    while (elt.nodeName.toLowerCase() !== 'tr')
      elt = elt.parentNode
    this.setState({
      selectedRowIndex: elt.cells[0].innerText
    })
  }

  exportToCsv() {
    axios.get('/users/export_file').then(res => {
      alert(res.data.msg)
    }).catch(err => {
      console.log(err)
    })
  }

  addUser (user) {
    if (user === false) {
      this.setState({
        isNewUser: false
      })
    }
    else if (!this.state.isNewUser) {
      this.setState({
        isNewUser: true
      })
    } else {
      if (!user.id) {
        this.setState({
          isNewUser: false,
          displayConfirmation: false
        })
      } else {
        const headers = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        axios.post('/users', user, headers).then(createdUser => {
          this.setState({
            displayConfirmation: false,
            isNewUser: false,
            users: [...this.state.users, createdUser.data]
          })
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }

  render () {
    const items = this.state.searchResults.length > 0
      ? this.state.searchResults
      : this.state.users
    return (
      <div className='App'>
        <div className='App-header mb-3'>
          <h1>Welcome to Student Mark Sheet</h1>
        </div>
        <div>
          <div className='input-group mb-3 col-md-6 offset-md-4'>
            <label className='pt-2 pr-2'><strong><b>Search:</b></strong></label>
            <input name='name' type='text' className='form-control mr-5'
                   placeholder='Enter student name'
                   onChange={this.searchStudentByName.bind(this)}/>
            <button type='button' className='btn btn-default mr-3'
                    onClick={this.addUser.bind(this)}>
              <i className='fas fa-user-plus' title='Add user'/>
            </button>
            <div className='fileUpload btn btn-primary mr-2'>
              <span>Upload</span>
              <input type='file' className='upload' id='studentData'
                     onChange={this.getFile.bind(this)}/>
            </div>
            <label id='fileName' className='mt-2 mr-2'/>
            <button className='btn btn-export' color='green'
            onClick={this.exportToCsv.bind(this)}>Export</button>
          </div>
          <div className=' table-responsive'>
            <div className=' col-md-10 offset-md-1'>
              <table id=' marks'
                     className=' table table-striped table-bordered table-hover
                   table-condensed'>
                <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">User ID</th>
                  <th scope="col">Login ID</th>
                  <th scope="col">HW1</th>
                  <th scope="col">HW2</th>
                  <th scope="col">HW3</th>
                  <th scope="col">HW4</th>
                  <th scope="col">HW5</th>
                  <th scope="col">HW6</th>
                </tr>
                </thead>
                <tbody>
                {items.map(user => (
                  <tr key={user.id} onClick={this.handleClick.bind(this)}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.sis_user_id}</td>
                    <td>{user.sis_login_id}</td>
                    <td><input type='number'
                               name='section_hw1'
                               id='hw1textField'
                               className='form-control'
                               defaultValue={user.section_hw1}
                               onBlur={this.saveScore.bind(this)}/>
                    </td>
                    <td><input type='number'
                               name='section_hw2'
                               id='hw2textField'
                               className='form-control'
                               defaultValue={user.section_hw2}
                               onBlur={this.saveScore.bind(this)}/>
                    </td>
                    <td><input type='number'
                               name='section_hw3'
                               id='hw3textField'
                               className='form-control'
                               defaultValue={user.section_hw3}
                               onBlur={this.saveScore.bind(this)}/>
                    </td>
                    <td><input type='number'
                               name='section_hw4'
                               id='hw4textField'
                               className='form-control'
                               defaultValue={user.section_hw4}
                               onBlur={this.saveScore.bind(this)}/>
                    </td>
                    <td><input type='number'
                               name='section_hw5'
                               id='hw5textField'
                               className='form-control'
                               defaultValue={user.section_hw5}
                               onBlur={this.saveScore.bind(this)}/>
                    </td>
                    <td><input type='number'
                               name='section_hw6'
                               id='hw6textField'
                               className='form-control'
                               defaultValue={user.section_hw6}
                               onBlur={this.saveScore.bind(this)}/>
                    </td>
                  </tr>
                ))}
                {
                  this.state.isNewUser &&
                  <AddUser numUsers={this.state.users.length}
                           displayConfirmation={this.state.displayConfirmation}
                           onSubmit={this.addUser.bind(this)}/>
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
