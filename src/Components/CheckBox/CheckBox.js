import { useState } from "react";
import { noop } from "../../utils/misc";

const CheckBox = ({ onClick = noop, name = "", text = "" }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    setIsChecked((prev) => !prev);
    onClick(event);
  }
  return (
    <label>
      <input type="checkbox" name={name} onChange={handleChange} checked={isChecked} value={text} />
      {text}
    </label>
  );
};

export default CheckBox;