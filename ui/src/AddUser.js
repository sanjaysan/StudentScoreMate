import React, { Component } from 'react'
import './App.css'

class AddUser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isUserCancelled: false
    }
  }
  saveUser (e) {
    e.preventDefault()
    this.setState({
      isUserCancelled: false
    })
    const newUser = {
      id: this.props.numUsers + 1,
      name: this.refs.name.value,
      sis_user_id: this.refs.userid.value,
      sis_login_id: this.refs.loginid.value,
      section_hw1: this.refs.section_hw1.value,
      section_hw2: this.refs.section_hw2.value,
      section_hw3: this.refs.section_hw3.value,
      section_hw4: this.refs.section_hw4.value,
      section_hw5: this.refs.section_hw5.value,
      section_hw6: this.refs.section_hw6.value
    }
    this.props.onSubmit(newUser)
  }

  cancelUser(e) {
    e.preventDefault()
    this.setState({
      isUserCancelled: true
    })
  }

  render () {
    if (this.state.isUserCancelled)
      this.props.onSubmit(false)
    return (
      <tr>
        <td>{this.props.numUsers + 1}</td>
        <td><input type='text' ref='name' className='form-control'/></td>
        <td><input type='text' ref='userid' className='form-control'/></td>
        <td><input type='text' ref='loginid' className='form-control'/></td>
        <td><input type='text' ref='section_hw1' className='form-control'/></td>
        <td><input type='text' ref='section_hw2' className='form-control'/></td>
        <td><input type='text' ref='section_hw3' className='form-control'/></td>
        <td><input type='text' ref='section_hw4' className='form-control'/></td>
        <td><input type='text' ref='section_hw5' className='form-control'/></td>
        <td><input type='text' ref='section_hw6' className='form-control'/></td>
        {
          !this.props.displayConfirmation &&
          <td>
            <button type='submit' className='btn btn-md btn-save mb-1'
                    onClick={this.saveUser.bind(this)}>Save
            </button>
            <button type='submit' className='btn btn-md btn-cancel ml-2'
                    onClick={this.cancelUser.bind(this)}>Cancel
            </button>
          </td>
        }
      </tr>
    )
  }
}

export default AddUser