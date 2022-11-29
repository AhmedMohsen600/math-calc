import { PureComponent } from 'react';

import './styles/button.css';

class Button extends PureComponent {
  render() {
    const { className, handelClick, mark } = this.props;
    return (
      <button
        onClick={handelClick.bind()}
        className={`${className}`}
        type="button"
      >
        {mark}
      </button>
    );
  }
}

export default Button;
