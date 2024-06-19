import Container from "../../../../components/Container";
import { H1, H5 } from "../../../../components/Typography";
import Button from "../../../../components/Button";
import { Card1 } from "../../../../components/Card";
import cn from "./style.module.scss";
import Sale from "./Sale";
import { v4 as uuid } from "uuid";

function Section1() {
  let salesInfo = [
    { name: "Total Sale", sum: 240 },
    { name: "Auctions", sum: 100 },
    { name: "Artists", sum: 240 },
  ];
  return (
    <div className={cn.section}>
      <Container className={cn.container}>
        <div className={cn.info}>
          <H1 className={cn.h1}>Discover digital art & Collect NFTs</H1>
          <H5 className={cn.h5} fontweight="400">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </H5>
          <Button icon={<i className="fa-solid fa-rocket"></i>}>Get Started</Button>
          <div className={cn.sales}>
            {salesInfo.map((el) => (
              <Sale key={uuid()} sum={el.sum} name={el.name} />
            ))}
          </div>
        </div>
        <div className={cn.card_wrap}>
          <Card1
            className={cn.card}
            imgSrc="cosmos.png"
            circleImgSrc="avatar.png"
            title="Space Walking"
            subtitle="Animakid"
          />
        </div>
      </Container>
    </div>
  );
}

export default Section1;
