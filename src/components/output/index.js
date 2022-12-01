import { PureComponent } from 'react';

import './styles/output.css';

class Output extends PureComponent {
  render() {
    const { value } = this.props;
    return <div className="output">{value}</div>;
  }
}

export default Output;
