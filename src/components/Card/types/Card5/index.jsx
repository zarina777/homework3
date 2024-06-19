import { H4, H5, P } from "../../../Typography";
import Box from "../../components/Box";
import ImgC from "../../components/CircleImg";
import Img from "../../components/Img";
import Text from "../../components/Text";
import clsx from "clsx";
import cn from "./style.module.scss";

function Card5({ ImgSrc, CImgSrc, name, username, price, highestBid }) {
  return (
    <Box className={cn.Card5}>
      <Img src={ImgSrc} />
      <Text className={cn.wrapper}>
        <div className={clsx(cn.info)}>
          <H5 fontweight="600">{name}</H5>
          <div className={clsx(cn.userInfo)}>
            <ImgC width="24" src={CImgSrc} />
            <p fontweight="400" fontFamily="mono">
              {username}
            </p>
          </div>
        </div>
        <ul>
          <li>
            <P
              fontweight="400"
              fontsize="12px"
              color="rgba(133, 133, 132, 1)"
              fontFamily="mono"
            >
              Price
            </P>
            <P fontweight="400">{price} ETH</P>
          </li>
          <li>
            <P
              fontweight="400"
              fontsize="12px"
              color="rgba(133, 133, 132, 1)"
              fontFamily="mono"
            >
              Highest Bid
            </P>
            <P fontweight="400">{highestBid} wETH</P>
          </li>
        </ul>
      </Text>
    </Box>
  );
}

export default Card5;
