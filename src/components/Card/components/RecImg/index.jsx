import clsx from "clsx";
import cn from "./style.module.scss";

function ImgR(props) {
  const { src, className } = props;
  return <img className={clsx(cn.Img, className)} src={src} />;
}

export default ImgR;
