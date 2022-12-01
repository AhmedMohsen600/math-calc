import './styles/button.css';

const Button = ({ className, handelClick, mark }) => {
  return (
    <button
      onClick={() => {
        handelClick(mark);
      }}
      className={`${className}`}
      type="button"
    >
      {mark}
    </button>
  );
};

export default Button;
