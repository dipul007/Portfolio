import React from "react";
import { AboutDiv, Skills } from "./style";
import Reactjs from "./../assets/images/reactjs.png";
import Typescript from "./../assets/images/ts-logo-128.svg";
import JS from "./../assets/images/js.png";
import Html from "./../assets/images/html5-logo-31820.png";
import Css from "./../assets/images/css.png";
import Nextjs from "./../assets/images/Nextjs-logo.svg";
import Graph from "./../assets/images/graphql-icon.svg";
import Sc from "./../assets/images/file-type-styled.svg";
import Formik from "./../assets/images/formik.svg";
import Rest from "./../assets/images/icons8-rest-api-100.png";
import Redux from "./../assets/images/redux.svg";
import Jira from "./../assets/images/jira.png";
import Github from "./../assets/images/github.png";
import Confluence from "./../assets/images/confluence.png";

import Aws from "./../assets/images/Amazon_Web_Services-Logo.wine.svg";

export default function About() {
  return (
    <AboutDiv>
      <div className="heading">My Tech Skills</div>
      <div className="content">
        <Skills>
          Reactjs <img src={Reactjs} />
        </Skills>
        <Skills>
          Typescript <img src={Typescript} />
        </Skills>
        <Skills>
          Javascript <img src={JS} />
        </Skills>
        <Skills>
          HTML/CSS{" "}
          <div className="row">
            <img src={Html} />
            <img src={Css} />
          </div>
        </Skills>
        <Skills>
          Nextjs <img src={Nextjs} />
        </Skills>
        <Skills>
          Graphql (Apollo Client) <img src={Graph} />
        </Skills>
        <Skills>
          Styled Components <img src={Sc} />
        </Skills>
        <Skills>
          Formik <img src={Formik} />
        </Skills>
        <Skills>
          REST APIs <img src={Rest} />
        </Skills>
        <Skills>
          Redux <img src={Redux} />
        </Skills>
        <Skills>
          AWS Amplify<img src={Aws} />
        </Skills>
      </div>
      <div className="heading">Tools</div>
      <div className="content">
        <Skills>
          Jira <img src={Jira} />
        </Skills>
        <Skills>
          Confluence <img src={Confluence} />
        </Skills>
        <Skills>
          Github <img src={Github} />
        </Skills>
      </div>
    </AboutDiv>
  );
}
