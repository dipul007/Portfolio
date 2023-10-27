import styled from "styled-components";
import Cursor from "./../assets/images/cursor.png";
import Pointer from "./../assets/images/target.png";
import Bg from "./../assets/images/bg.jpg";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  font-family: "Regular";
  border-radius: 50px;
  margin-bottom: 5px;
`;

export const Logo = styled.div`
  margin-top: 5px;
  @media (max-width: 400px) {
    img {
      height: 20px;
    }
  }
  img {
    &:hover {
      animation: mymove 3s infinite;
      @keyframes mymove {
        50% {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

export const Links = styled.div`
  display: flex;
`;

export const A = styled.a`
  text-decoration: none;
  padding: 25px;
  cursor: url(${Pointer}), auto;
  font-weight: 600;
  font-size: 20px;
  font-family: "Oatmeal";
  color: black;
  @media (max-width: 400px) {
    font-size: 15px;
    padding: 18px;
  }
  &:hover {
    transition: all 0.6s ease-in-out 0s;
    color: #e65f78;
    font-weight: 900;
  }
`;

export const Button = styled.button`
  padding: 8px;
  width: 120px;
  border-radius: 12px;
  border: none;
  font-family: monospace;
  color: black;
  cursor: url(${Pointer}), auto;

  &:hover {
    transition: all 0.6s ease-in-out 0s;
    background: #e65f78;
    font-weight: 700;
    color: white;
  }
`;
export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin: 0 5px 0 5px;
  margin-bottom: 5px;
  flex-direction: column;
  background: url(${Bg});
  background-size: cover;
  font-family: monospace;

  img {
    height: 305px;
    cursor: url(${Pointer}), auto;
    border-radius: 5px;
  }

  .bounce-1 {
    &:hover {
      transition: all 0.6s ease-in-out 0s;
      box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
        rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }
  }
  @keyframes bounce-1 {
    0% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-100px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
  .info {
    text-align: center;
    font-size: 35px;
    font-weight: 900;
    cursor: url(${Cursor}), auto;

    cursor: url(${Pointer}), auto;
    &:hover {
      -webkit-animation: bounce 0.4s ease infinite alternate;
    }

    @keyframes bounce {
      0% {
        text-shadow: 0 5px 0 #ccc, 0 2px 3px rgba(0, 0, 0, 1);
      }
      100% {
        transform: translateY(-20px);
        text-shadow: 0 50px 0 #66347f, 0 0px 20px rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

export const AboutDiv = styled.div`
  .content {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .heading {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  font-family: "Oatmeal";
  margin: 40px 5px 40px 5px;
  padding: 5px;
  height: 350px;
  border-radius: 30px;
  @media (max-width: 1300px) {
    height: 100%;
  }
`;

export const Skills = styled.div`
  border-radius: 6px;
  text-align: center;
  background: #dee3df;
  color: black;
  margin: 8px;
  font-size: 15px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  flex-direction: column;
  width: 100px;
  height: 85px;
  justify-content: center;

  img {
    height: 30px;
  }
  .row {
    display: flex;
  }
  &:hover {
    background-color: #f2b6a0;
    color: white;
    transition: all 0.6s ease-in-out 0s;
  }
`;

export const ProjectDiv = styled.div`
  color: black;
  font-family: "Oatmeal";
  margin: 40px 5px 20px 5px;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .border {
    border-right: solid 2px black;
    @media (max-width: 900px) {
      border-right: none;
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 30px;
  .heading {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    text-decoration: underline;
    color: #0a4d68;
  }
  .project {
    @media (max-width: 500px) {
      margin-top: 25px;
    }
  }
  .info {
    margin-bottom: 20px;
    margin-top: 120px;
    font-size: 20px;
    font-weight: 600;
    font-family: monospace;
    text-align: left;
    div:first-child {
      font-size: 28px;
      font-weight: 700;
    }
    @media (max-width: 500px) {
      margin-top: 80px;
    }
  }
  .left {
    margin-left: -178px;
    @media (max-width: 800px) {
      margin-left: 10px;
    }
    @media (max-width: 500px) {
      margin-left: 10px;
    }
  }
`;

export const ContentProject = styled.a`
  width: 230px;
  height: 200px;

  @media (max-width: 500px) {
    width: 180px;
  }
  cursor: pointer;
  img {
    height: 150px;
    @media (max-width: 500px) {
      height: 120px;
    }
  }
  font-family: monospace;
  border: solid 1px black;
  border-radius: 6px;
  padding: 5px;
  margin: 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  &:hover {
    background-color: black;
    color: white;
    &:hover {
      transition: all 0.6s ease-in-out 0s;
    }
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  font-family: "Regular";
  border-radius: 50px;
  margin-bottom: 5px;
  height: 70px;
  img {
    height: 50px;
  }
  .img {
    height: 40px;
  }
  .resume {
    &:hover {
      -webkit-animation: none;
      color: rgba(0, 0, 0, 0.8);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      border-radius: 5px;
      padding: 5px;
    }
  }
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: url(${Pointer}), auto;
    font-family: monospace;
    font-size: 18px;
    &:hover {
      -webkit-animation: bounce 0.4s ease infinite alternate;
    }

    @keyframes bounce {
      0% {
        text-shadow: 0 5px 0 #ccc, 0 2px 3px rgba(0, 0, 0, 1);
      }
      100% {
        transform: translateY(-20px);
        text-shadow: 0 50px 0 #66347f, 0 0px 20px rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

export const ConnectDiv = styled.div`
  display: grid;
  place-content: center;
  margin: 8px;
  font-size: 18px;
`;
export const ConnectDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  padding: 10px;
  border-radius: 8px;
  font-family: monospace;
  font-weight: 600;
  @media (max-width: 500px) {
    width: 300px;
  }
  div {
    margin: 5px;
  }
  input:focus {
    outline: none;
    color: #5264ae;
  }
  button {
    padding: 10px;
    border-radius: 15px;
    border: none;
    background-color: #ffb4b4;
    width: 120px;
    font-size: 15px;
    font-weight: 500;
    margin-top: 5px;
    &:hover {
      color: white;
      cursor: url(${Pointer}), auto;
      background-color: #9e4784;
    }
  }
`;
export const Input = styled.input`
  width: 55%;
  margin: 8px;
  height: 20px;
  border: none;
  border-bottom: 1px solid #757575;
  font-size: 14px;
`;

export const ErrorDIv = styled.div`
  color: red;
  font-size: 12px;
  text-align: left;
`;
