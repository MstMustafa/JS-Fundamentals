function printFlightsByStatus(input) {
  const flights = {}; // Store flights
  const updates = input[1];
  const statusToCheck = input[2][0];

  input[0].forEach(flight => {
    const [flightNumber, destination] = flight.split(' ');
    flights[flightNumber] = { Destination: destination, Status: "Ready to fly" };
  });

  updates.forEach(update => {
    const [flightNumber, newStatus] = update.split(' ');
    if (flights[flightNumber]) {
      flights[flightNumber].Status = newStatus;
    }
  });


  for (const flightNumber in flights) {
    const flight = flights[flightNumber];
    if (flight.Status === statusToCheck) {
      console.log(`{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`);
    } else if (statusToCheck === "Ready to fly" && flight.Status === "Ready to fly") {
      console.log(`{ Destination: '${flight.Destination}', Status: 'Ready to fly' }`);
    }
  }
}
