import cn from "./style.module.scss";
import ImgC from "../../components/CircleImg";
import ImgR from "../../components/RecImg";
import "./style.module.scss";
import { H5, P } from "../../../Typography";

function Card2() {
  return (
    <div className={cn.card}>
      <div className={cn.img_warp}>
        <ImgR src="img.png" />
        <ImgR src="img.png" />
        <ImgR src="img.png" />
        <ImgR src="img.png" />
      </div>
      <H5 fontweight={600}>DSGN Animals</H5>
      <div className={cn.small_info}>
        <ImgC src="img.png" width="24" />
        <P fontweight={400}>MrFox</P>
      </div>
    </div>
  );
}

export default Card2;
