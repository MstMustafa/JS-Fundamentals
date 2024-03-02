function manageParkingLot(commands) {
  let parkingLot = new Set();

  commands.forEach(command => {
    let [direction, carNumber] = command.split(", ");
    if (direction === 'IN') {
      parkingLot.add(carNumber);
    } else if (direction === 'OUT') {
      parkingLot.delete(carNumber);
    }
  });

  if (parkingLot.size > 0) {
    let sortedCars = Array.from(parkingLot).sort();
    sortedCars.forEach(car => console.log(car));
  } else {
    console.log("Parking Lot is Empty");
  }
}
