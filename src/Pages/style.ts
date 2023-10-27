import styled from "styled-components";

export const Loader = styled.div`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: #1b262c;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: relative;
    background: conic-gradient(
      violet,
      indigo,
      blue,
      green,
      yellow,
      orange,
      red
    );
    animation: 2s rotate linear infinite;
  }

  .loader:before {
    position: absolute;
    content: "";
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    background: #17262c;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .loader:after {
    position: absolute;
    content: "";
    z-index: -3;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    background: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(25px);
    border-radius: 50%;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
