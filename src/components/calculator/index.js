import { PureComponent } from 'react';

import { Button, Output } from '..';

import './styles/calculator.css';

class Calculator extends PureComponent {
  handelClick = () => 'handel something';

  handelCalc = () => 'handel calc';

  render() {
    return (
      <div className="wrapper">
        <Output />
        <Button
          handelClick={this.handelClick}
          className="btn light-gray"
          mark="AC"
        />
        <Button
          handelClick={this.handelCalc}
          className="btn light-gray"
          mark="+/-"
        />
        <Button
          handelClick={this.handelCalc}
          className="btn light-gray"
          mark="%"
        />
        <Button handelClick={this.handelCalc} className="btn orange" mark="/" />
        <Button handelClick={this.handelCalc} className="btn" mark="7" />
        <Button handelClick={this.handelCalc} className="btn" mark="8" />
        <Button handelClick={this.handelCalc} className="btn" mark="9" />
        <Button handelClick={this.handelCalc} className="btn orange" mark="X" />
        <Button handelClick={this.handelCalc} className="btn" mark="4" />
        <Button handelClick={this.handelCalc} className="btn" mark="5" />
        <Button handelClick={this.handelCalc} className="btn" mark="6" />
        <Button handelClick={this.handelCalc} className="btn orange" mark="+" />
        <Button handelClick={this.handelCalc} className="btn" mark="1" />
        <Button handelClick={this.handelCalc} className="btn" mark="2" />
        <Button handelClick={this.handelCalc} className="btn" mark="3" />
        <Button handelClick={this.handelCalc} className="btn orange" mark="-" />
        <Button handelClick={this.handelCalc} className="btn zero" mark="0" />
        <Button handelClick={this.handelCalc} className="btn" mark="." />
        <Button handelClick={this.handelCalc} className="btn orange" mark="=" />
      </div>
    );
  }
}

export default Calculator;
