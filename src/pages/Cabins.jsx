import styled from "styled-components";
import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable-v2";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import { device } from "../styles/helpers";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

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

function Cabins() {
  return (
    <>
      <HeaderRow>
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </HeaderRow>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
