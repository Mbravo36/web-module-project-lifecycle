import React from 'react';

class App extends React.Component {
  render() {
    return(<div>
      <h1>Github Card</h1>
      <form>
        <input placeholder='Github Handle' />
        <button>Search</button>
      </form>
    </div>);
  }
}

export default App;
