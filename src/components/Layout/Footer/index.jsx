import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Container from "../../Container";
import InputForm from "../../Input/InputForm";
import Socials from "../../Socials";
import { H5 } from "../../Typography";
import Logo from "../Logo";
import cn from "./style.module.scss";

function Footer() {
  return (
    <footer className={cn.footer}>
      <Container>
        <div className={cn.top}>
          <div className={clsx(cn.first, cn.same)}>
            <Logo />
            <ul>
              <li>NFT marketplace UI created with Anima for Figma.</li>
              <li>Join our community</li>
              <li>
                <Socials />
              </li>
            </ul>
          </div>
          <div className={clsx(cn.second, cn.same)}>
            <H5 fontFamily="mono">Explore</H5>
            <ul>
              <li>
                <NavLink to="/">Marketplace</NavLink>
              </li>
              <li>
                <NavLink to="rankings">Rankings</NavLink>
              </li>
              <li>
                <NavLink to="connection">Connect a wallet</NavLink>
              </li>
            </ul>
          </div>
          <div className={clsx(cn.third, cn.same)}>
            <H5 fontFamily="mono">Join our weekly digest</H5>
            <ul>
              <li>
                Get exclusive promotions & updates straight to your inbox.
              </li>
              <li>
                <InputForm
                  type="email"
                  placeholder="Enter your email here"
                  buttonName="Subscribe"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={cn.bottom}>Ⓒ NFT Market. Use this template freely.</div>
      </Container>
    </footer>
  );
}

export default Footer;
