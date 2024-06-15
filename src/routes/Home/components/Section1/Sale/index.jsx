import { clsx } from "clsx";
import { H4, P } from "../../../../../components/Typography";
import cn from "./style.module.scss";

function Sale(props) {
  const { sum, name } = props;
  return (
    <div className={clsx(cn.sale)}>
      <H4 fontFamily="mono">{sum}k+</H4>
      <P>{name}</P>
    </div>
  );
}

export default Sale;
