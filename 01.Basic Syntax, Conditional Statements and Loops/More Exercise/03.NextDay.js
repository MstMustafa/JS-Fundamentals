function getNextDay(year, month, day) {
  
  let currentDate = new Date(year, month - 1, day); 

  let nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);

  
  let nextYear = nextDay.getFullYear();
  let nextMonth = nextDay.getMonth() + 1; 
  let nextDayOfMonth = nextDay.getDate();

  
  let formattedResult = `${nextYear}-${nextMonth}-${nextDayOfMonth}`;

  console.log(formattedResult);
}
