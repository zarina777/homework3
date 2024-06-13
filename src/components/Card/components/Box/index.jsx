import clsx from "clsx";
import cn from "./style.module.scss";

function Box(props) {
  let { children, className } = props;
  return <div className={clsx(cn.Box, className)}>{children}</div>;
}

export default Box;
