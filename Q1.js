const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
];
const Details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
];

const studentsMarkSheets = students.map(student => {
    const details = Details.find(detail => detail.Roll === student.Roll);

    if (details) {
        const { math = 0, english = 0, chemistry = 0, computer = 0 } = details.subjects;
        const total = math + english + chemistry + computer;
        const status = total >= 150 ? "pass" : "fail";

        return { ...student, math, english, chemistry, computer, total, status };
    } else {
        return student;
    }
});

console.log(studentsMarkSheets);
