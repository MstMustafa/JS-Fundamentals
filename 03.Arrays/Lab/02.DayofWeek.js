function printDayName(dayNumber) {
    let daysOfWeek = [
        "Invalid day!",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if (dayNumber >= 1 && dayNumber <= 7) {
        let dayName = daysOfWeek[dayNumber];
        console.log(dayName);
    } else {
        console.log("Invalid day!");
    }
}
