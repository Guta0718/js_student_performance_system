const name="Guta Tiruneh";
const age=24;
const course="Modern frontend";
const mark=90;
const attendance=100;

// Student information display

function StudentInfo(
    name,
    age,
    course,
    mark,
    attendance) {
    
    return `

    Student Information:
    Name:${name}
    Age: ${age}
    Course: ${course}
    Score: ${mark}
    Attendance: ${attendance}%`;
}

// Grading system

const calculateGrade= (mark) => {
    if (mark>=90) {
        return "A";
    }
    else if (mark>=80) {
        return "B";
    } 
    else if (mark>=70) {
        return "C";
    }
    else if (mark>=60) {
        return "D";
    }
    else{
        return "F";
    }
}

console.log(calculateGrade(90));
console.log(calculateGrade(40));

// Status and eligibility

const StudentStatus=(mark) => {
    if (mark>=90) {
        return "Excellent"
    }
    else if (mark>=60) {
        return "Passed";
    }
    else{
        return "Failed";
    }
}

console.log(`${StudentStatus(mark)}`);

const eligibility = (mark,attendance) => {
    return mark >=50 && attendance >=75 ? "Eligibile": "Not Eligibile";
}

console.log(eligibility(70,60))
console.log(eligibility(80,90))

// Trim, upper case and includes

const normalName="Guta Tiruneh"
const UppercaseName= normalName.trim().toUpperCase();
console.log(UppercaseName)

const isStudent = course.toUpperCase().includes("STUDENT");
console.log(`Student: ${isStudent}`);

score=80
const resultMessage = (score) >= 60 ? "Pass" : "Fail";
console.log(`Student Status: ${resultMessage}`);

// Scopes

const carName=" BYD Seagull"

function ShowSellStatus(){
    const SellInfo="Vehicle is sold out"
    console.log(`${carName}:${SellInfo}`);

    for (let i = 1 ; i <= 2 ; i++) {
        const message= `step: ${i}`;
        console.log(message);
    }
    }
ShowSellStatus();




