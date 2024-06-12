import clsx from "clsx";
import cn from "./style.module.scss";
function H1(props) {
  const { children, className, fontFamily } = props;
  return (
    <h1
      className={clsx(
        cn.h1,
        fontFamily == "mono" ? cn.mono : fontFamily == "work" ? cn.work : "",
        className
      )}
    >
      {children}
    </h1>
  );
}
export default H1;
