import clsx from "clsx";
import cn from "./style.module.scss";
function H5(props) {
  const { children, className, fontFamily } = props;
  return (
    <h5
      className={clsx(
        cn.h5,
        fontFamily == "mono" ? cn.mono : fontFamily == "work" ? cn.work : "",
        className
      )}
    >
      {children}
    </h5>
  );
}

export default H5;
