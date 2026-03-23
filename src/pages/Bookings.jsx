import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import HeaderRow from "../ui/HeaderRow";
import Heading from "../ui/Heading";

function Bookings() {
  return (
    <>
      <HeaderRow>
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </HeaderRow>

      <BookingTable />
    </>
  );
}

export default Bookings;
