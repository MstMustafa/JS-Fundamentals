function storeCarsInGarages(carInfoList) {
  const garages = {};

  carInfoList.forEach(carInfo => {
    const [garageNumber, carDetails] = carInfo.split(' - ', 2);
    if (!garages[garageNumber]) {
      garages[garageNumber] = [];
    }
    garages[garageNumber].push(carDetails);
  });

  let result = "";
  Object.keys(garages).sort((a, b) => Number(a) - Number(b)).forEach(garage => {
    result += `Garage № ${garage}\n`;
    garages[garage].forEach(car => {
      const formattedCar = car.split(', ').map(detail => detail.replace(': ', ' - ')).join(', ');
      result += `--- ${formattedCar}\n`;
    });
  });

  return result.trim();
}
