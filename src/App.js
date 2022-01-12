import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    currentUser: 'Mbravo36',
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/93017587?v=4",
      html_url: "https://github.com/Mbravo36",
      name: 'Maribel Garcia',
      login: "Mbravo36",
      public_repos: 33,
      followers: 5,
    },
    followers: [
      {
      login: "FftyShadesofCode",
      avatar_url: "https://avatars.githubusercontent.com/u/31264591?v=4",
      html_url: "https://github.com/FftyShadesofCode",
      },
      {
      login: "cainpalmer",
      avatar_url: "https://avatars.githubusercontent.com/u/86445750?v=4",
      html_url: "https://github.com/cainpalmer",
      },
      {
      login: "kimnivore",
      avatar_url: "https://avatars.githubusercontent.com/u/91563653?v=4",
      html_url: "https://github.com/kimnivore",
      }
    ]
  }

  render() {
    return(<div>
      <h1>Github Card</h1>
      <form>
        <input placeholder='Github Handle' />
        <button>Search</button>
      </form>

      <User user={this.state.user} />
      <FollowerList followers={this.state.followers}/>
      
    </div>);
  }
}

export default App;
