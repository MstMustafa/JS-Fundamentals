function convertPoundsToDollars(pounds) {
    
   let conversionRate = 1.31;

   let dollars = pounds * conversionRate;
  
   let formattedResult = dollars.toFixed(3);

    console.log(formattedResult); 
}
