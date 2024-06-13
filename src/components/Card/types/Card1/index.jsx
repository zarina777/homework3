import React from "react";
import Box from "../../components/Box";
import Img from "../../components/Img";
import Text from "../../components/Text";
import cn from "./style.module.scss";
import { H5, P } from "../../../Typography";

function Card1(props) {
  const { imgSrc, title, circleImgSrc, subtitle } = props;
  return (
    <Box className={cn.Card1}>
      <Img src={imgSrc} />
      <Text className={cn.wrap}>
        <H5>{title}</H5>
        <div className={cn.Info}>
          <Img width='24' src={circleImgSrc} type='circle' />
          <P fontweight='400'>{subtitle}</P>
        </div>
      </Text>
    </Box>
  );
}

export default Card1;
