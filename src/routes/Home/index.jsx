import Card1 from "../../components/Card/types/Card1";
import Container from "../../components/Container";
import cn from './style.module.scss'
function Home() {
  return (
    <Container className={cn.container}>
      <Card1 imgSrc='cosmos.png' title='Space Walking' subtitle='Animakid' circleImgSrc='cosmos.png' />

    </Container>
  );
}

export default Home;
