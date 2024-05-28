function ReqReading(pages, pagesRead1hour , days)
{
   let timeRead= pages / pagesRead1hour
   let reqHours = timeRead / days

   console.log(reqHours)

}
