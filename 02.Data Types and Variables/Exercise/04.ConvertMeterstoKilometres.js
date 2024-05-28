function metersToKilometersAndPrint(distanceInMeters) {
  
  let distanceInKilometers = distanceInMeters * 0.001;

  let formattedDistance = distanceInKilometers.toFixed(2);

  console.log(`${formattedDistance}`);
}
