import cn from "./style.module.scss";

const Socials = () => {
  return (
    <div className={cn.socials}>
      <a href="">
        <i className="fa-brands fa-discord"></i>
      </a>
      <a href="">
        <i className="fa-brands fa-youtube"></i>
      </a>
      <a href="">
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a href="">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};

export default Socials;
