// Array of student objects
const students = [
    { name: "Alice", age: 20, grade: 92 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 23, grade: 77 },
    { name: "David", age: 21, grade: 89 },
    { name: "Eve", age: 20, grade: 95 }
];

// Function to get top students
function getTopStudents(students) {
    return students.filter(student => student.grade >= 85);
}

// Function to calculate average grade
function averageGrade(students) {
    const total = students.reduce((sum, student) => sum + student.grade, 0);
    return (total / students.length).toFixed(2);
}

// Display results
function displayResults() {
    const topStudents = getTopStudents(students);
    const avgGrade = averageGrade(students);

    document.getElementById('topStudents').innerHTML = `
        <h2>Top Students</h2>
        <ul>
            ${topStudents.map(student => `<li>${student.name} - Grade: ${student.grade}</li>`).join('')}
        </ul>
    `;

    document.getElementById('averageGrade').innerHTML = `
        <h2>Average Grade</h2>
        <p>${avgGrade}</p>
    `;
}

// Run display function on page load
document.addEventListener('DOMContentLoaded', displayResults);
