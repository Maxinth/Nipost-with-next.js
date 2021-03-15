import styled, { css } from "styled-components";

const DropDownContainer = styled.section`
  transition: height 0.6s;
  position: fixed;
  z-index: 200;
  left: 0;
  top: 98px;
  height: ${({ height }) => height && `${height}px`};
  background-color: rgb(190, 186, 186);
  width: 100%;
  overflow: auto;
  > ul {
    padding: 1rem 0.5rem;
  }
  @media (min-width: 815px) {
    display: none;
  }
`;

const ContentBox = styled.ul``;
const Box = styled.div`
  display: flex;
  align-items: center;
  > svg {
    color: #333;
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }

  ${({ details }) =>
    details &&
    css`
      transition: height 0.3s;
      overflow: hidden;
      height: ${({ height }) => height && `${height}px`};
      padding: 0 2rem;
    `}
`;
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  text-transform: uppercase;
  line-height: 1.7;
  font-family: "Open Sans", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
`;
const ListItemInner = styled(ListItem)`
  font-size: 0.7rem;
`;
const Span = styled.span`
  > svg {
    transition: transform 0.2s;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${({ flip }) =>
    flip &&
    css`
      > svg {
        transform: rotate(180deg);
      }
    `}
`;

export { DropDownContainer, ContentBox, ListItem, Span, Box, ListItemInner };
