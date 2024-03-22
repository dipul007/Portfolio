import React from "react";
import { ContentProject, ProjectDiv } from "./style";
import Slabs from "./../assets/images/slabs.svg";
import Pulse from "./../assets/images/pulsechain.jpg";
import Rex from "./../assets/images/rexnetlogo.png";
import Recycle from "./../assets/images/recycle.jpg";
import Vrynt from "./../assets/images/vrynt.png";

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
            <ul>
              <li>
                Develop robust and user-friendly web applications using ReactJS,
                TypeScript adhering to best practices and coding standards.
                Utilize React hooks, context API, and Redux for state management
                and component communication.
              </li>
              <li>
                Utilize React hooks, context API, and Redux for state management
                and component communication.
              </li>
              <li>
                Implement responsive and visually appealing UIs with HTML5,
                CSS3, and modern CSS modules such as Flexbox and Grid.
              </li>
              <li>
                Optimize application performance and bundle size using Webpack
                5.
              </li>
              <li>
                Apply advanced ES6 concepts and ensure code maintainability and
                scalability..
              </li>
              <li>
                CUtilize Git for version control, ensuring codebase integrity
                and collaborative development.
              </li>
            </ul>
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
                Utilize GraphQL client for efficient data fetching and
                management within the frontend applications.
              </li>{" "}
              <li>
                Design, implement, and maintain Continuous Integration and
                Continuous Deployment (CI/CD) pipelines for efficient software
                delivery.
              </li>{" "}
              <li>
                Skilled NextJS developer proficient in React, SSR, SSG, and API
                integration.
              </li>
              <li>
                {" "}
                Conducted code reviews to ensure code quality, performance, and
                adherence to best practices.
              </li>
            </ul>
            <div>From 07/2021 To 03/2023</div>
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
          <ContentProject
            href="https://wastewyze.com/"
            target="_blank"
            className="left"
          >
            WasteWyze <img src={Recycle} />
          </ContentProject>
          <ContentProject href="https://app.vrynt.io/" target="_blank">
            Vrynt <img src={Vrynt} width="150px" style={{ height: "80px" }} />
          </ContentProject>
        </div>
      </ProjectDiv>
    </>
  );
}
