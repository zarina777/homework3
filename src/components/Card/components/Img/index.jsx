import clsx from "clsx";
import cn from "./style.module.scss";

function Img(props) {
  let { src, className, type = 'normal', width = "50" } = props;
  if (type == 'circle') {
    return (
      <img style={{ width: width + 'px' }} src={src} className={clsx(cn.Img, cn.Circle, className)} />
    )
  } else {
    return <img src={src} className={clsx(cn.Img, className)} />

  }

}

export default Img;
