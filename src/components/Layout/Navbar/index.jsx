import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { P } from "../../Typography";
import Container from "../../Container";
import Button from "../../Button";
import Logo from "../Logo";
import Cover from "../../BgCover";
import cn from "./style.module.scss";

function Navbar() {
  let [bar, openSideBar] = useState(false);
  function closeSideBar() {
    openSideBar(false);
  }
  return (
    <div className={clsx(cn.Navbar)}>
      <Container className={cn.Container}>
        <Logo />
        <ul style={bar ? { right: "0" } : { right: "-100%" }}>
          <li>
            <NavLink to="/">
              <P>Marketplace</P>
            </NavLink>
          </li>
          <li>
            <NavLink to="rankings">
              <P>Rankings</P>
            </NavLink>
          </li>
          <li>
            <NavLink to="connection">
              <P>Connect a wallet</P>
            </NavLink>
          </li>
          <li>
            <Button color="red" sidepadding="30" icon={<i className="fa-solid fa-rocket"></i>}>
              Sign Up
            </Button>
          </li>
        </ul>
        <i
          onClick={openSideBar}
          id={cn.Bar}
          className="fa-solid fa-bars-staggered"
        ></i>
        <Cover onFunc={closeSideBar} dblock={bar ? true : false} />
      </Container>
    </div>
  );
}

export default Navbar;
