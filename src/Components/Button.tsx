import React from "react";
import styled from "styled-components";

const Button = styled.button<Props>`
  font-size: 18px;
  font-weight: 500;
  border: 2px solid #000000;
  border-radius: 25px;
  box-sizing: border-box;
  height: 50px;
  width: 177px;
  background: rgba(0, 0, 0, 0.04);
  text-transform: uppercase;
  cursor: pointer;
  ${(props) => {
    if (props.active) {
      return `
        background: Black;
        color: white;
      `;
    } else {
      return `
      color: black;
      `;
    }
  }}
`;

interface Props extends React.HTMLAttributes<HTMLElement> {
  active: Boolean;
}

export default Button;
