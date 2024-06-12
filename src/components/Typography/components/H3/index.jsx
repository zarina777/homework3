import cn from "./style.module.scss";
import clsx from "clsx";
function H3(props) {
  const { children, className } = props;
  let obj = {
    color: "blue",
  };
  return (
    <h3 className={className} style={obj}>
      {children}
    </h3>
  );
}

export default H3;
