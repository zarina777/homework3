import clsx from "clsx";
import cn from "./style.module.scss";

function Img(props) {
  const { src, className } = props;
  {
    return <img src={src} className={clsx(cn.Img, className)} />;
  }
}

export default Img;
