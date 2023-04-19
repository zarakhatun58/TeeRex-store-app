import { noop } from "../../utils/misc";

const Button = ({ children, type, onClick, className }) => {
  return (
    <button
      {...{
        type,
        onClick,
        className,
      }}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  onclick: noop,
  classNames: "",
};

export default Button;