import { H3, H5 } from "../../../../../components/Typography";
import cn from "./style.module.scss";

function Heading(props) {
  const { heading, subheading } = props;
  return (
    <div className={cn.heading}>
      <H3>{heading}</H3>
      <H5 fontweight="400">{subheading}</H5>
    </div>
  );
}

export default Heading;
