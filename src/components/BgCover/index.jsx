import cn from "./style.module.scss";
function Cover(props) {
  let { dblock = false, onFunc } = props;
  return (
    <div
      onClick={onFunc}
      style={dblock ? { display: "block" } : { display: "none" }}
      className={cn.BgCover}
    ></div>
  );
}

export default Cover;
