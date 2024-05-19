function printValidDatesFromArray(inputArray) {
    const regex = /\b(?<day>\d{2})(?<sep>[./-])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})\b/g;

    inputArray.forEach(item => {

        const potentialDates = item.split(',');
        
        potentialDates.forEach(date => {
            let match;
            while (match = regex.exec(date.trim())) {
                const {day, month, year} = match.groups;
                console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
            }
        });
    });
}
