import cn from "./style.module.scss";

const Container = (props) => {
  const { children } = props;
  return <div className={cn.Container}>{children}</div>;
};

export default Container;
