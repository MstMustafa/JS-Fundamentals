function solve(input) {
    const gradesMap = new Map();
    
    input.forEach(entry => {
        let [studentName, ...grades] = entry.split(' ');
        grades = grades.map(Number);
        
        if (!gradesMap.has(studentName)) {
            gradesMap.set(studentName, grades);
        } else {
            const existingGrades = gradesMap.get(studentName);
            gradesMap.set(studentName, existingGrades.concat(grades));
        }
    });

    const sortedGrades = Array.from(gradesMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    
    sortedGrades.forEach(([studentName, grades]) => {
        const averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        console.log(`${studentName}: ${averageGrade.toFixed(2)}`);
    });
}
