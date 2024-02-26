function scheduleMeetings(input) {
    const schedule = {};
    const output = [];

    input.forEach(meeting => {
        const [day, name] = meeting.split(' ');
        if (!schedule[day]) {
            schedule[day] = name;
            output.push(`Scheduled for ${day}`);
        } else {
            output.push(`Conflict on ${day}!`);
        }
    });

    output.forEach(message => console.log(message));

    Object.keys(schedule).forEach(day => {
        console.log(`${day} -> ${schedule[day]}`);
    });
}
