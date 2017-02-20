import * as React from 'react';
import './App.css';

import Calculator from './components/Calculator';

class App extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <div>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
