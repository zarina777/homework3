import clsx from "clsx";
import cn from "./style.module.scss";
function P(props) {
  let { fontweight = '600', children, className, fontFamily = "work", color = 'rgba(255, 255, 255, 1)' } = props;
  return (
    <p style={{ color: color, fontWeight: fontweight }}
      className={clsx(
        cn.P,
        fontFamily == "mono" ? cn.mono : fontFamily == "work" ? cn.work : "",
        className
      )}
    >
      {children}
    </p>
  );
}

export default P;
