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
        
            const studentInfo = line.match(/(.+)\[(\d+)] with email (.+) joins (.+)/);
            if (!studentInfo) return;

            const [, username, credits, email, courseName] = studentInfo;
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
