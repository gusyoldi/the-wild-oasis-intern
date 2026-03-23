import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable-v2";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import HeaderRow from "../ui/HeaderRow";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

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
