import React, { Component } from 'react';
import './App.css';
import Person from './Person'

class App extends Component {

  state = {
    users : [],
    homePage: true,
    selectedUser: ''
  }

  fetchUsers = async () => {
    const userData =  await fetch('https://api.github.com/users')
    const users = await userData.json()
    return users
  }

  async componentDidMount() {
    const users =  await this.fetchUsers()
    const firstFiveUsers = users.slice(0, 5)
    this.setState({users: firstFiveUsers})
  }

  render() {
    const { users, homePage, selectedUser } = this.state
    return (
      <div className='page-container'>
          {homePage
          ?
          <>
            <h2>Top 5 GitHub Users</h2>
            <p>Tap the username to see more information</p>
            {users.map(user => <button className='btn' onClick={() => this.setState({ homePage: !homePage, selectedUser: user.url})} key={user.id}>{user.login}</button> )}
          </>
          :
            <Person user={selectedUser} />
          }
       </div>
    );
  }
}

export default App;
