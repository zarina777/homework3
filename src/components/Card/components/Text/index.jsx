import clsx from "clsx";
import cn from "./style.module.scss";

function Text(props) {
  let { className, children } = props;
  return <div className={clsx(cn.Text, className)}>{children}</div>;
}

export default Text;
