import cn from "./style.module.scss";
import { H5 } from "../../Typography";
function Logo() {
  return (
    <div className={cn.Logo}>
      <i className="fa-solid fa-store"></i>
      <H5 fontFamily="mono">NFT MarketPlace</H5>
    </div>
  );
}

export default Logo;
