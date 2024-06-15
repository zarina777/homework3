import { Card2 } from "../../../../components/Card";
import Container from "../../../../components/Container";
import Heading from "../components/Heading";
import cn from "./style.module.scss";
import clsx from "clsx";

function Section2() {
  return (
    <div className={clsx(cn.section)}>
      <Container className={cn.container}>
        <Heading
          heading="Trending Collection"
          subheading="Checkout our weekly updated trending collection."
        />
        <div className={clsx(cn.card_container)}>
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </Container>
    </div>
  );
}

export default Section2;
