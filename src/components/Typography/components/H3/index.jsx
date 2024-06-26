import clsx from "clsx";
import cn from "./style.module.scss";
function H3(props) {
  const {
    fontweight = "700",
    children,
    className,
    fontFamily = "work",
  } = props;
  return (
    <h3
      style={{ fontWeight: fontweight }}
      className={clsx(
        cn.h3,
        fontFamily == "mono" ? cn.mono : fontFamily == "work" ? cn.work : "",
        className
      )}
    >
      {children}
    </h3>
  );
}

export default H3;
