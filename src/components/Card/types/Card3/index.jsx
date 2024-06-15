import clsx from "clsx";
import { H5, P } from "../../../Typography";
import Box from "../../components/Box";
import ImgC from "../../components/CircleImg";
import cn from "./style.module.scss";

function Card3(props) {
  const { className, totalSale, imgSrc, name } = props;
  return (
    <Box className={clsx(cn.Card, className)}>
      <P color="rgba(133, 133, 132, 1)" className={cn.number} fontFamily="mono">
        1
      </P>
      <ImgC src={imgSrc} />
      <div className={cn.info}>
        <H5 fontweight={600}>{name}</H5>
        <div className={cn.subinfo}>
          <P
            color="rgba(133, 133, 132, 1)"
            fontweight={400}
            className={cn.total}
          >
            Total Sales:
          </P>
          <P fontweight={400} fontFamily="mono" className={cn.price}>
            {totalSale} ETH
          </P>
        </div>
      </div>
    </Box>
  );
}

export default Card3;
