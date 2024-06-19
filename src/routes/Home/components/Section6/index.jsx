import Container from "../../../../components/Container";
import Tag from "../../../../components/Tag";
import clsx from "clsx";
import cn from "./style.module.scss";
import { H2, H3, P } from "../../../../components/Typography";
import Button from "../../../../components/Button";

const Section6 = () => {
  return (
    <div className={cn.section6}>
      <Container className={cn.container}>
        <div className={cn.firstPart}>
          <Tag img="avatar.png">Shroomie</Tag>
          <H2>Magic Mashrooms</H2>
          <Button type="white" icon={<i className="fa-regular fa-eye"></i>}>
            See NFT
          </Button>
        </div>
        <div className={cn.hour}>
          <P fontweight="400" fontsize="12px" fontFamily="mono">
            Auction ends in:
          </P>
          <div className={cn.time_hour}>
            <li>
              <H3 fontFamily="mono">59</H3>
              <span>Hours</span>
            </li>
            <li>
              <H3 fontFamily="mono">:</H3>
            </li>
            <li>
              <H3 fontFamily="mono">59</H3>
              <span>Minutes</span>
            </li>
            <li>
              <H3 fontFamily="mono">:</H3>
            </li>
            <li>
              <H3 fontFamily="mono">59</H3>
              <span>Seconds</span>
            </li>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section6;
