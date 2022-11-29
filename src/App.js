import { PureComponent } from 'react';

import { Calculator } from './components';

import './index.css';

class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}

export default App;
