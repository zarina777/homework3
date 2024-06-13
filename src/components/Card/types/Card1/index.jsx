import React from "react";
import Box from "../../components/Box";
import Img from "../../components/Img";
import Text from "../../components/Text";
import cn from "./style.module.scss";
import { H5 } from "../../../Typography";

function Card1(props) {
  const { imgSrc, title, circleImgSrc, subtitle } = props;
  return (
    <Box className={cn.Card1}>
      <Img src={imgSrc} />
      <Text>
        <H5>{title}</H5>
        <div className={cn.Info}></div>
      </Text>
    </Box>
  );
}

export default Card1;
