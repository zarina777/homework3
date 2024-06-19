import Card6 from "../../../../components/Card/types/Card6";
import Container from "../../../../components/Container";
import Heading from "../components/Heading";
import cn from "./style.module.scss";

const Section7 = () => {
  return (
    <div className={cn.section7}>
      <Container className={cn.container}>
        <Heading
          heading="How it works"
          subheading="Find out how to get started"
        />
        <div className={cn.cards_wrapper}>
          <Card6
            imgSrc="card6.png"
            name="Setup Your wallet"
            text="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
          />
          <Card6
            imgSrc="card6.png"
            name="Create Collection"
            text="Upload your work and setup your collection. Add a description, social links and floor price."
          />
          <Card6
            imgSrc="card6.png"
            name="Create Collection"
            text="Upload your work and setup your collection. Add a description, social links and floor price."
          />
        </div>
      </Container>
    </div>
  );
};

export default Section7;
