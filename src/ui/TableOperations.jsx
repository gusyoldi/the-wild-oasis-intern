import styled from "styled-components";
import { device } from "../styles/helpers";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default TableOperations;
