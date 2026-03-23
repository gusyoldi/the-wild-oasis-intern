import styled from "styled-components";
import { device } from "../../styles/helpers";

const DashboardBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media ${device.mobile} {
    padding: 0.2rem;

    & h2 {
      padding-left: 3.2rem;
      padding-top: 2.4rem;
    }
  }
`;

export default DashboardBox;
