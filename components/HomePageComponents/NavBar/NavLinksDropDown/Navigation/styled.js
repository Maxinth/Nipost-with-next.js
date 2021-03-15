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
  margin-top: 1rem;
`;

const NavListItem = styled(DetailsItem)`
  align-items: center;
  cursor: pointer;
  > svg {
    font-size: 0.8rem;
  }

  ${Span} {
    font-size: 0.9rem;
    transition: transform 0.2 ease-out;
    :hover {
      transform: scale(1.01);
    }
  }
`;

const NavContainer = styled(Container)`
  margin-left: 1rem;
  flex: 1;
`;

export { NavContainer, NavigationBox, Span, NavListItem };
