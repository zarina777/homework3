import clsx from "clsx";
import { Link } from "react-router-dom";
import Container from "../../Container";
import Button from "../../Button";
import Logo from "../Logo";
import cn from "./style.module.scss";
import { P } from "../../Typography";

function Navbar() {
  return (
    <div className={clsx(cn.Navbar)}>
      <Container className={cn.Container}>
        <Logo />
        <ul>
          <li>
            <Link to="marketplace">
              <P>Marketplace</P>
            </Link>
          </li>
          <li>
            <Link to="rankings">
              <P>Rankings</P>
            </Link>
          </li>
          <li>
            <Link to="wallet">
              <P>Connect a wallet</P>
            </Link>
          </li>
          <li>
            <Button className={cn.btn} icon="fa-solid fa-rocket">
              Sign Up
            </Button>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
