import styled from "styled-components";
interface ModalBodyProps {
  show: boolean;
}

export const ModalBody = styled.div<ModalBodyProps>`
  color: white;
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(26, 39, 50, 0.7);
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ back }) => (back == "true" ? "#FFF" : "#0552fb")};
  box-shadow: 0px 2px 8px rgba(46, 47, 54, 0.08);
  border-radius: 8px;
  padding: ${({ back }) => (back == "true" ? "20px 0" : "20px")};
  overflow: auto;
  position: relative;
  max-height: 100%;
  min-width: 35%;
  font-family: monospace;
  a {
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    width: 250px;
    border-radius: 8px;
  }

  .child {
    margin-top: ${({ withMargin }) => (withMargin ? "13px" : 0)};
  }

  .cross {
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
    height: 25px;
    border: ${({ back }) => (back == "true" ? "1px solid #101010" : "none")};
    border-radius: 50%;
  }
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
`;

export const Circle = styled.div`
  border: 2px solid #ffffff;
  border-radius: 50%;
  width: 112px;
  height: 112px;
  z-index: 86;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.div<any>`
  font-size: 25px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.1428571492433548px;
  margin-top: 15px;
`;

export const Desc = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  margin: 13px 0 24px;
`;
