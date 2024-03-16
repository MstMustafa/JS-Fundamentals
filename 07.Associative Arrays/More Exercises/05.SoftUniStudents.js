function manageSoftUniStudents(input) {
    const courses = {};

    input.forEach(line => {
        if (line.includes(':')) {
            
            const [courseName, capacity] = line.split(': ');
            if (!courses[courseName]) {
                courses[courseName] = { capacity: +capacity, students: [] };
            } else {
                courses[courseName].capacity += +capacity;
            }
        } else {
          
            const [studentPart, courseName] = line.split(' joins ');
            const [usernameWithCredits, emailPart] = studentPart.split(' with email ');
            const credits = usernameWithCredits.slice(usernameWithCredits.lastIndexOf('[') + 1, usernameWithCredits.lastIndexOf(']'));
            const username = usernameWithCredits.slice(0, usernameWithCredits.lastIndexOf('['));
            const email = emailPart;

            if (courses[courseName] && courses[courseName].students.length < courses[courseName].capacity) {
                courses[courseName].students.push({ username, email, credits: +credits });
            }
        }
    });

    
    Object.entries(courses).sort((a, b) => b[1].students.length - a[1].students.length).forEach(([courseName, courseInfo]) => {
        console.log(`${courseName}: ${courseInfo.capacity - courseInfo.students.length} places left`);
        courseInfo.students.sort((a, b) => b.credits - a.credits).forEach(student => {
            console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        });
    });
}
