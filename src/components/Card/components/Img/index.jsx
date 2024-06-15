import clsx from "clsx";
import cn from "./style.module.scss";

function Img(props) {
  let { src, className } = props;
  {
    return <img src={src} className={clsx(cn.Img, className)} />;
  }
}

export default Img;
