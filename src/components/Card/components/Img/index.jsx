import clsx from "clsx";
import cn from "./style.module.scss";

function Img(props) {
  let { src, className, type, width = "50px" } = props;
  return (
    <>
      <img
        style={width ? { width: `${width}px` } : ""}
        className={(clsx(cn.Img), type == "circle" ? cn.Circle : "", className)}
        src={src}
      />
    </>
  );
}

export default Img;
