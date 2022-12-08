import { useState } from 'react';

import { Button, Output } from '..';

import calculate from '../../logic/calculate';

import './styles/calculator.css';

const Calculator = () => {
  const [data, setData] = useState({ next: 0, operation: '', total: '' });

  const handelCalc = (mark) => {
    const calc = calculate(data, mark);
    setData({
      next: calc.next ? calc.next : '',
      operation: calc.operation ? calc.operation : '',
      total: calc.total ? calc.total : '',
    });
  };

  const { total, operation, next } = data;

  return (
    <section>
      <h4>Let&apos;s do some maths</h4>
      <div className="wrapper">
        <Output value={`${total} ${operation} ${next}`} />
        <Button handelClick={handelCalc} className="btn light-gray" mark="AC" />
        <Button
          handelClick={handelCalc}
          className="btn light-gray"
          mark="+/-"
        />
        <Button handelClick={handelCalc} className="btn light-gray" mark="%" />
        <Button handelClick={handelCalc} className="btn orange" mark="÷" />
        <Button handelClick={handelCalc} className="btn" mark="7" />
        <Button handelClick={handelCalc} className="btn" mark="8" />
        <Button handelClick={handelCalc} className="btn" mark="9" />
        <Button handelClick={handelCalc} className="btn orange" mark="x" />
        <Button handelClick={handelCalc} className="btn" mark="4" />
        <Button handelClick={handelCalc} className="btn" mark="5" />
        <Button handelClick={handelCalc} className="btn" mark="6" />
        <Button handelClick={handelCalc} className="btn orange" mark="+" />
        <Button handelClick={handelCalc} className="btn" mark="1" />
        <Button handelClick={handelCalc} className="btn" mark="2" />
        <Button handelClick={handelCalc} className="btn" mark="3" />
        <Button handelClick={handelCalc} className="btn orange" mark="-" />
        <Button handelClick={handelCalc} className="btn zero" mark="0" />
        <Button handelClick={handelCalc} className="btn" mark="." />
        <Button handelClick={handelCalc} className="btn orange" mark="=" />
      </div>
    </section>
  );
};

export default Calculator;
