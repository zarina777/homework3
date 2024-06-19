import React from "react";
import { H5, P } from "../../../Typography";
import Box from "../../components/Box";
import Img from "../../components/Img";
import Text from "../../components/Text";
import cn from "./style.module.scss";
const Card6 = ({ imgSrc, name, text }) => {
  return (
    <Box className={cn.card6}>
     <div className={cn.card_wrap}>
	 <Img src={imgSrc} />
      <Text className={cn.text}>
        <H5>{name}</H5>
        <P fontweight="400">
         {text}
        </P>
      </Text>
	 </div>
    </Box>
  );
};

export default Card6;
