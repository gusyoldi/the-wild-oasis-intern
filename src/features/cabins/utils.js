export const filterByDiscount = (cabins, filter) => {
  let filteredCabins;
  if (filter === "all") filteredCabins = cabins;

  if (filter === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  if (filter === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  return filteredCabins;
};
