import clsx from "clsx";
import cn from "./style.module.scss";
function H2(props) {
  const { children, className, fontFamily = "work" } = props;
  return (
    <h2
      className={clsx(
        cn.h2,
        fontFamily == "mono" ? cn.mono : fontFamily == "work" ? cn.work : "",
        className
      )}
    >
      {children}
    </h2>
  );
}
export default H2;
