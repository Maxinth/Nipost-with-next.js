import styled from "styled-components";

const ControlsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  transition: margin-top 0.2s;
  position: absolute;
  bottom: 70px;
  right: 100px;
  left: 100px;
  svg {
    color: #333;
    transition: color 0.2s;
  }
  svg.current {
    color: rgb(255, 98, 0);
  }
`;

export { ControlsContainer };
