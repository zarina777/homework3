import Container from "../../../../components/Container";
import { H1, H5 } from "../../../../components/Typography";
import Button from "../../../../components/Button";
import { Card1 } from "../../../../components/Card";
import Data from "./data";
import cn from "./style.module.scss";

function Section1() {
  let data = Data;
  console.log(data);
  return (
    <div className={cn.section}>
      <Container className={cn.container}>
        <div className={cn.info}>
          <H1>Discover digital art & Collect NFTs</H1>
          <H5 fontweight="400">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </H5>
          <Button icon="fa-solid fa-rocket">Get Started</Button>
        </div>
        <Card1
          imgSrc="cosmos.png"
          circleImgSrc="avatar.png"
          title="Space Walking"
          subtitle="Animakid"
        />
      </Container>
    </div>
  );
}

export default Section1;
