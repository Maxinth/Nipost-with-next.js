import {
  Container,
  DetailsBox,
  Span,
  DetailsItem as NavListItem,
} from "../OnlineTools/styled";
import styled from "styled-components";

const NavigationBox = styled(DetailsBox)`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${NavListItem} {
    > svg {
      font-size: 0.7rem;
    }
  }
`;

export { Container, NavigationBox, Span, NavListItem };
