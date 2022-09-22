import { useState } from "react";
import styled from "styled-components";
import toggleImg from "./assests/toggle.png";

const AsideWrapper = styled.div`
  margin: 0;
  width: 18%;
  height: 100%;
  color: white;
  left: ${(props) => (props.toggle ? "0px" : "-280px")};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  transition: all 0.5s ease-in-out;
  margin: 0;
  /* for glassmorphism */
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-right: 1px solid rgba(255, 255, 255, 0.18);

  ul {
    list-style: none;
    color: yellow;
  }
  li {
    padding: 1rem;
  }
  h1 {
    margin: 0;
  }
  img {
    position: absolute;
    top: 50%;
    right: -14%;
    cursor: pointer;
    width: 55px;
    height: 55px;
  }
`;

const AsideToggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <AsideWrapper toggle={toggle}>
      <h1>Toggle</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Company</li>
        <li>Perks</li>
        <li>Legal</li>
        <li>Payments</li>
      </ul>
      <ul>
        <li>Get Help</li>
        <li>Chat With Us</li>
      </ul>
      <img src={toggleImg} onClick={() => setToggle(!toggle)} />
    </AsideWrapper>
  );
};

export default AsideToggle;
