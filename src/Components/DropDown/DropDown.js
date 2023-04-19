import { noop } from "../../utils/misc";

const Dropdown = ({ children, onChange = noop, name = "" }) => {
  return <select onChange={onChange} name={name} style={{marginBottom:"20px"}}>{children}</select>;
};

export default Dropdown;