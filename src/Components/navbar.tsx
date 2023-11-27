import React from "react";
import { A, Links, Logo, Nav } from "./style";
import LogoD from "./../assets/images/logo.png";

export default function Navbar() {
  const onClick = () => {
    window.scrollTo({
      top: 800,
      left: 700,
      behavior: "smooth",
    });
  };
  const onProject = () => {
    window.scrollTo({
      top: 1300,
      left: 1000,
      behavior: "smooth",
    });
  };
  const onConnect = () => {
    window.scrollTo({
      top: 2300,
      left: 1000,
      behavior: "smooth",
    });
  };
  return (
    <Nav>
      <Logo>
        <img src={LogoD} alt="logo.png" height="40px" />
      </Logo>
      <Links>
        <A onClick={onClick}>About </A>
        <A onClick={onProject}>Projects</A>
        <A onClick={onConnect}>Connect</A>
      </Links>
    </Nav>
  );
}
