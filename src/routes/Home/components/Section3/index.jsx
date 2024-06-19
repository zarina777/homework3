import Container from "../../../../components/Container";
import Heading from "../components/Heading";
import Button from "../../../../components/Button";
import Card3 from "../../../../components/Card/types/Card3";
import cn from "./style.module.scss";

function Section3() {
  return (
    <div className={cn.section}>
      <Container className={cn.container}>
        <div className={cn.heading}>
          <Heading
            heading="Top creators"
            subheading="Checkout Top Rated Creators on the NFT Marketplace"
          />
          <Button icon={<i className="fas fa-solid fa-rocket"></i>} type="link">
            View Rankings
          </Button>
        </div>
        <div className={cn.card_wrap}>
          <Card3 totalSale="34.50" name="Keepitreal" imgSrc="girlinred.png" />
          <Card3 totalSale="34.50" name="Keepitreal" imgSrc="girlinred.png" />
          <Card3 totalSale="34.50" name="Keepitreal" imgSrc="girlinred.png" />
          <Card3 totalSale="34.50" name="Keepitreal" imgSrc="girlinred.png" />
          <Card3 totalSale="34.50" name="Keepitreal" imgSrc="girlinred.png" />
          <Card3 totalSale="34.50" name="Keepitreal" imgSrc="girlinred.png" />
          <Card3 totalSale="34.50" name="Keepitreal" imgSrc="girlinred.png" />
          <Card3 totalSale="34.50" name="Keepitreal" imgSrc="girlinred.png" />
        </div>
      </Container>
    </div>
  );
}

export default Section3;
