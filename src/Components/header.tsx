import React, { useState } from "react";
import { HeaderDiv } from "./style";
import Headpic from "./../assets/images/maindp.jpg";
import Animated from "./../assets/images/animated.jpg";

export default function Header() {
  const [change, setChange] = useState(false);
  return (
    <>
      <HeaderDiv>
        <div className="image" onClick={() => setChange(!change)}>
          {change ? (
            <img src={Animated} className="bounce-1" />
          ) : (
            <img src={Headpic} className="bounce-1" />
          )}
        </div>
        <div className="info">
          <div>
            Hello, <div>i'm Dipul Gupta</div>
          </div>
          <div>Frontend Developer</div>
        </div>
      </HeaderDiv>
    </>
  );
}
