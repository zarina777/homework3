import cn from "./style.module.scss";

const Input = ({ type, placeholder, icon }) => {
  if (icon)
    return (
      <div className={cn.input}>
        {icon}
        <input type={type} placeholder={placeholder} />
      </div>
    );
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
