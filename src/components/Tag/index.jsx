import ImgC from "../Card/components/CircleImg";
import P from "../Typography/components/P";
import cn from "./style.module.scss";

const Tag = ({ children, img }) => {
  return (
    <div className={cn.Tag}>
      <div className={cn.flex}>
      <ImgC width='24px' src={img}/>
      <P fontweight='400'>{children}</P>
      </div>
    </div>
  );
};

export default Tag;
