import Button from "../../../../components/Button";
import { Card5 } from "../../../../components/Card";
import Container from "../../../../components/Container";
import Heading from "../components/Heading";
import cn from "./style.module.scss";
const Section5 = () => {
  return (
    <div className={cn.section5}>
      <Container className={cn.container}>
        <div className={cn.heading}>
          <Heading
            heading="Discover More NFTs"
            subheading="Explore new trending NFTs"
          />
          <Button type="link" icon={<i className="fa-regular fa-eye"></i>}>
            See All
          </Button>
        </div>
        <div className={cn.cards_wrapper}>
          <Card5
            CImgSrc="./avatar.png"
            ImgSrc="./cosmos.png"
            name="Distant Galaxy"
            username="MoonDancer"
            price="1.63"
            highestBid="0.33"
          />
          <Card5
            CImgSrc="./avatar.png"
            ImgSrc="./cosmos.png"
            name="Distant Galaxy"
            username="MoonDancer"
            price="1.63"
            highestBid="0.33"
          />
          <Card5
            CImgSrc="./avatar.png"
            ImgSrc="./cosmos.png"
            name="Distant Galaxy"
            username="MoonDancer"
            price="1.63"
            highestBid="0.33"
          />
        </div>
      </Container>
    </div>
  );
};

export default Section5;
