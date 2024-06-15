import React from "react";
import Box from "../../components/Box";
import Img from "../../components/Img";
import Text from "../../components/Text";
import cn from "./style.module.scss";
import { H5, P } from "../../../Typography";
import clsx from "clsx";
import ImgC from "../../components/CircleImg";

function Card1(props) {
  const { className, imgSrc, title, circleImgSrc, subtitle } = props;
  return (
    <Box className={clsx(cn.Card1, className)}>
      <Img src={imgSrc} />
      <Text className={cn.wrap}>
        <H5>{title}</H5>
        <div className={cn.Info}>
          <ImgC width="24" src={circleImgSrc} />
          <P fontweight="400">{subtitle}</P>
        </div>
      </Text>
    </Box>
  );
}

export default Card1;
