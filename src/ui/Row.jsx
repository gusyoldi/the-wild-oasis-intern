import styled, { css } from "styled-components";
import { device } from "../styles/helpers";

const Row = styled.div.attrs((props) => ({
  type: props.type ?? "vertical",
}))`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;

      @media ${device.mobile} {
        text-align: center;
      }
    `}
`;

export default Row;
