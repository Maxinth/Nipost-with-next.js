import {
  Container,
  DetailsBox,
  Span,
  DetailsItem,
} from "../OnlineTools/styled";
import styled from "styled-components";

const NavigationBox = styled(DetailsBox)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`;

const NavListItem = styled(DetailsItem)`
  > svg {
    font-size: 0.8rem;
  }

  ${Span} {
    font-size: 0.9rem;
  }
`;

const NavContainer = styled(Container)`
  margin-left: 1rem;
`;

export { NavContainer, NavigationBox, Span, NavListItem };
