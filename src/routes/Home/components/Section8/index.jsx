import ImgR from "../../../../components/Card/components/RecImg";
import Container from "../../../../components/Container";
import { Input, InputForm } from "../../../../components/Input";
import { H2,  P } from "../../../../components/Typography";
import cn from "./style.module.scss";

const Section8 = () => {
  return (
    <div className={cn.section8}>
      <Container className={cn.container}>
        <ImgR src="cosmos.png" />
        <div className={cn.infoPart}>
          <div className={cn.info}>
            <H2>Join our weekly digest</H2>
            <P fontweight="400" fontsize="22px">
              Get exclusive promotions & updates straight to your inbox.
            </P>
          </div>
          <InputForm
            buttonName="Subscribe"
            type="email"
            placeholder="Enter your email here"
            buttonIcon={<i className="fas fa-solid fa-rocket"></i>}
          />
        </div>
      </Container>
    </div>
  );
};

export default Section8;
