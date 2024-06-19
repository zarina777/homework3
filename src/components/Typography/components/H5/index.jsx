import clsx from "clsx";
import cn from "./style.module.scss";
function H5(props) {
  const {
    fontsize='22px',
    fontweight = "700",
    children,
    className,
    fontFamily = "work",
  } = props;
  return (
    <h5
    
      style={{ fontWeight: fontweight, fontSize:fontsize}}
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
