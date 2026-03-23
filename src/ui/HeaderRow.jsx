import styled from "styled-components";
import { device } from "../styles/helpers";

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default HeaderRow;
