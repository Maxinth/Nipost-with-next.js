import {
  Container,
  DetailsBox,
  Span,
  DetailsItem,
} from "../OnlineTools/styled";
import styled from "styled-components";

const NavigationBox = styled(DetailsBox)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  /* margin-top: 1rem; */
  margin-top: 0.5rem;
`;

const NavListItem = styled(DetailsItem)`
  align-items: center;
  cursor: pointer;
  > svg {
    font-size: 0.8rem;
  }

  ${Span} {
    font-size: 0.9rem;
    color: black;
    font-family: "Open Sans", sans-serif;
    transition: color 0.2s;
    font-weight: 700;
    :hover {
      color: #fff;
    }
  }
`;

const NavContainer = styled(Container)`
  margin-left: 1rem;
  flex: 1;
`;

export { NavContainer, NavigationBox, Span, NavListItem };
