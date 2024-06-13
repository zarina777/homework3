import clsx from "clsx";
import cn from "./style.module.scss";
import { P } from "../Typography";
function Button(props) {
  const { icon, children, type = "simple", sidepadding = "50" } = props;
  return (
    <button
      className={clsx(
        cn.Button,
        type == "link"
          ? cn.Link_Button
          : type == "simple"
          ? cn.Simple_Button
          : type == "white"
          ? cn.White_Button
          : "",
        sidepadding == "30"
          ? cn.Small_Button
          : sidepadding == "50"
          ? cn.Large_Button
          : ""
      )}
    >
      {icon ? <i className={icon}></i> : ""}{" "}
      <P
        color={
          type == "link"
            ? "#A259FF"
            : type == "white"
            ? "rgba(43, 43, 43, 1)"
            : "rgba(255, 255, 255, 1)"
        }
      >
        {children}
      </P>
    </button>
  );
}

export default Button;
