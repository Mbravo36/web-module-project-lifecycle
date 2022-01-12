import React from 'react';

class App extends React.Component {
  render() {
    return(<div>
      <h1>Github Card</h1>
      <form>
        <input placeholder='Github Handle' />
        <button>Search</button>
      </form>

      <div id='UserCard'>
      <img width='300px' src="https://avatars.githubusercontent.com/u/93017587?v=4" />
      <a target="_blank" href="https://github.com/Mbravo36"> <h3>Maribel Garcia</h3></a>
      <p>(Mbravo36)</p>
      <p>Total Repos: 33</p>
      <p>Total Followers: 2</p>
      </div>

      <div id='followers'>
        <div className='follower'>
        <img width='200px' src="https://avatars.githubusercontent.com/u/31264591?v=4" />
       <a target="_blank" href="https://github.com/FftyShadesofCode"> <p>Philip R McDavid</p></a>
        </div>
        <div className='follower'>
        <img width='200px' src="https://avatars.githubusercontent.com/u/86445750?v=4" />
       <a target="_blank" href="https://github.com/cainpalmer"> <p>Cain Palmer</p></a>
        </div>
        <div className='follower'>
        <img width='200px' src="https://avatars.githubusercontent.com/u/91563653?v=4" />
       <a target="_blank" href="https://github.com/kimnivore"> <p>Kim</p></a>
        </div>

      </div>

    </div>);
  }
}

export default App;
