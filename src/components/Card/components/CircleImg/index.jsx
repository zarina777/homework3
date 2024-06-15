import clsx from "clsx";
import cn from "./style.module.scss";

function ImgC(props) {
  let { src, className, width = 120 } = props;
  return (
    <img
      src={src}
      style={{ width: width + "px" }}
      className={clsx(cn.imgwrap, className)}
    />
  );
}

export default ImgC;
