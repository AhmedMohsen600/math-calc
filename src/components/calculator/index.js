import { PureComponent } from 'react';

import { Button, Output } from '..';

import calculate from '../../logic/calculate';

import './styles/calculator.css';

class Calculator extends PureComponent {
  constructor() {
    super();
    this.state = { next: 0, operation: '', total: '' };
  }

  handelCalc = (mark) => {
    const calc = calculate(this.state, mark);
    this.setState({
      next: calc.next ? calc.next : '',
      operation: calc.operation ? calc.operation : '',
      total: calc.total ? calc.total : '',
    });
  };

  render() {
    const { next, operation, total } = this.state;
    return (
      <div className="wrapper">
        <Output value={`${total} ${operation} ${next}`} />
        <Button
          handelClick={this.handelCalc}
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
        <Button handelClick={this.handelCalc} className="btn orange" mark="÷" />
        <Button handelClick={this.handelCalc} className="btn" mark="7" />
        <Button handelClick={this.handelCalc} className="btn" mark="8" />
        <Button handelClick={this.handelCalc} className="btn" mark="9" />
        <Button handelClick={this.handelCalc} className="btn orange" mark="x" />
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
