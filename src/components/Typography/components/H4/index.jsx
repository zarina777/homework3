import clsx from "clsx";
import cn from "./style.module.scss";
function H5(props) {
  const {
    fontweight = "700",
    children,
    className,
    fontFamily = "work",
  } = props;
  return (
    <h4
      style={{ fontWeight: fontweight }}
      className={clsx(
        cn.h4,
        fontFamily == "mono" ? cn.mono : fontFamily == "work" ? cn.work : "",
        className
      )}
    >
      {children}
    </h4>
  );
}

export default H5;
