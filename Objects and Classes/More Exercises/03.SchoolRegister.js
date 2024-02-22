function processStudents(input) {
  const studentsByGrade = {};

  input.forEach(studentInfo => {
    const [, name, currentGradeStr, scoreStr] = studentInfo.match(/Student name: ([^,]+), Grade: (\d+), Graduated with an average score: ([\d.]+)/);
    const currentGrade = parseInt(currentGradeStr, 10);
    const score = parseFloat(scoreStr);

    if (score >= 3) {
      const nextGrade = currentGrade + 1;
      if (!studentsByGrade[nextGrade]) {
        studentsByGrade[nextGrade] = { students: [], totalScore: 0, count: 0 };
      }
      studentsByGrade[nextGrade].students.push(name);
      studentsByGrade[nextGrade].totalScore += score;
      studentsByGrade[nextGrade].count += 1;
    }
  });

  Object.keys(studentsByGrade).sort((a, b) => a - b).forEach(grade => {
    const { students, totalScore, count } = studentsByGrade[grade];
    const averageScore = totalScore / count;
    console.log(`${grade} Grade`);
    console.log(`List of students: ${students.join(', ')}`);
    console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
    console.log(); // Empty row
  });
}
