import React, { Component } from 'react'
import './App.css';


class Person extends Component {
  state = {user: {}}

  async componentDidMount() {
    const user = await this.fetchUser()
    this.setState({user})
  }

  fetchUser = async () => {
    const userData = await fetch(this.props.user)
    const user = await userData.json()
    return user
  }

  render() {
    const { user } = this.state


    return (
      <div className='page-container'>
      <h2>Person Page</h2>
      <div className='container'>
        <div className='avatar-container'>
          <img className='avatar-pic' src={user.avatar_url} />
        </div>
        <div className='user-info'>
          <div className='name'>{user.name}</div>
          <div className='location'>{user.location} </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Person