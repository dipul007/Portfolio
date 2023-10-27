import React from "react";
import { FooterDiv } from "./style";
import LinkedIn from "./../assets/images/linkedin.webp";
import Github from "./../assets/images/github.png";

export default function Footer() {
  function handleDownloadClick() {
    const link = document.createElement("a");
    link.download = "Dipul's Resume.pdf";
    link.href = "/Resume.pdf";
    link.click();
  }
  return (
    <>
      <FooterDiv>
        <a
          href="https://www.linkedin.com/in/dipul-gupta-9a0b79201/"
          target="_blank"
        >
          <img src={LinkedIn} />
        </a>
        <a onClick={handleDownloadClick} className="resume">
          Resume
        </a>

        <a href="https://github.com/dipul7" target="_blank">
          <img src={Github} className="img" />
        </a>
      </FooterDiv>
    </>
  );
}
