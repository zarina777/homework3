import clsx from "clsx";
import { H5, P } from "../../../Typography";
import Box from "../../components/Box";
import Img from "../../components/Img";
import Text from "../../components/Text";
import cn from "./style.module.scss";

function Card4(props) {
  const { className, name, icon } = props;
  return (
    <Box className={clsx(cn.Card, className)}>
      <div className={cn.img_wrap}>
        <Img src="category.png" />
        <i className={clsx(icon, cn.icon)}></i>
      </div>
      <Text className={cn.text_wrap}>
        <H5 fontsize="22px">{name}</H5>
      </Text>
    </Box>
  );
}

export default Card4;
