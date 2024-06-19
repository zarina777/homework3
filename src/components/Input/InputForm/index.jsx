import cn from "./style.module.scss";
import Button from "../../Button";
import clsx from "clsx";

const InputForm = ({ className,type, buttonName, buttonIcon, placeholder }) => {
  return (
    <form className={clsx(cn.InputForm, className)}>
      <input type={type} placeholder={placeholder} />
      <Button icon={buttonIcon}>{buttonName}</Button>
    </form>
  );
};

export default InputForm;
