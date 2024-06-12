import cn from "./style.module.scss";
import clsx from "clsx";
function H2(props) {
  const { children, className } = props;
  let obj = {
    color: "red",
  };
  return (
    <h2 className={className} style={obj}>
      {children}
    </h2>
  );
}

export default H2;
