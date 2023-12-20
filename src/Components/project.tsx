import React from "react";
import { ContentProject, ProjectDiv } from "./style";
import Slabs from "./../assets/images/slabs.svg";
import Pulse from "./../assets/images/pulsechain.jpg";
import Rex from "./../assets/images/rexnetlogo.png";

export default function Project() {
  return (
    <>
      <ProjectDiv>
        <div className="border">
          {" "}
          <div className="heading">Work Experience</div>
          <div className="info">
            <div>Vayuz Technologies</div>
            <div>Product Engineer (Reactjs)</div>
            <ul><li>Develop new user-facing features.</li>
              <li>Build reusable code and libraries for future use.</li>
              <li>Ensure the technical feasibility of UI/UX designs.</li>
              <li>Optimize application for maximum speed and scalability.</li>
              <li>Translating design in Figma to reusable components.</li>
              <li>Collaborate with other team members and stakeholders.</li></ul>
            <div>From 07/2023 To Present</div>
          </div>
          <div className="info">
            {" "}
            <div>Rapid Innovation</div>
            <div>Software Developer</div>
            <ul>
              <li>
                Promoted as a Junior tech lead in the Frontend Department.{" "}
              </li>
              <li>
                Designed dynamic and browser compatible pages using Reactjs,
                HTML5, CSS3, and Typescript.
              </li>{" "}
              <li> Works on Block chain Technology using Ethereum.</li>{" "}
              <li>
                Expand features, refine code, and improve processes, producing
                smoother operations and enhancing user engagement.
              </li>
              <li>
                {" "}
                Deliver engaging user experience through optimization of images,
                code, and cross-browser compatibility.
              </li>
            </ul>
            <div>From 07/2021 To 04/2023</div>
          </div>
          <div className="info">
            {" "}
            <div>HTCTL</div>
            <div>Quality Manager</div>
            <ul>
              <li>
                Responsible for checking the quality of materials before
                receiving.
              </li>
              <li>
                To maintain the relationship with client according to their
                requirement.
              </li>
              <li>
                To adopt and learn the customer needs as per site testing
                requirements.
              </li>
            </ul>
            <div>From 07/2015 To 07/2018</div>
          </div>
        </div>
        <div>
          <div className="heading project">Projects</div>
          <ContentProject
            href="https://thewearableinternet.com/"
            target="_blank"
          >
            Slabs
            <img src={Slabs} />
          </ContentProject>
          <ContentProject className="left">
            Pulse Chain Crash Rocket <img src={Pulse} />
          </ContentProject>
          <ContentProject href="https://www.rexnet.io/" target="_blank">
            Rexnet <img src={Rex} />
          </ContentProject>
        </div>
      </ProjectDiv>
    </>
  );
}
