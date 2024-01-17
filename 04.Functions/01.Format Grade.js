function printGradeDescription(grade) {
    let description;

    if (grade < 3.00) {
        description = "Fail";
        grade = Math.floor(grade); // Round down to the nearest integer
    } else if (grade < 3.50) {
        description = "Poor";
        grade = grade.toFixed(2);
    } else if (grade < 4.50) {
        description = "Good";
        grade = grade.toFixed(2);
    } else if (grade < 5.50) {
        description = "Very good";
        grade = grade.toFixed(2); // Round down to the nearest integer
    } else {
        description = "Excellent";
        grade = grade.toFixed(2);
    }

    console.log(`${description} (${grade})`);
}
