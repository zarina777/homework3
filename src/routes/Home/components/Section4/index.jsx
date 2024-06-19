import { Card4 } from "../../../../components/Card";
import Container from "../../../../components/Container";
import { H3 } from "../../../../components/Typography";
import data from "./data/data";
import cn from "./style.module.scss";
function Section4() {
  console.log(data);
  return (
    <div className={cn.Section4}>
      <Container className={cn.container}>
        <H3>Browse Categories</H3>
        <div className={cn.card_wrapper}>
          <Card4 name="Art" icon="fa-solid fa-wand-magic-sparkles" />
          <Card4 name="Art" icon="fa-solid fa-wand-magic-sparkles" />
          <Card4 name="Art" icon="fa-solid fa-wand-magic-sparkles" />
          <Card4 name="Art" icon="fa-solid fa-wand-magic-sparkles" />
        </div>
      </Container>
    </div>
  );
}

export default Section4;
