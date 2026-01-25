//console.log ("Hello, World!.");
//console.log ("This is a test JavaScript file.");

/* 
console.log ("JavaScript is working!");
console.log ("Let's do some coding.");
*/
// String , number, Boolean, Object, Arry
/*
// String
let fname = "John"; // String
let age = 30; // Number
let height = 5.9; // Number
const PI = 3.14; // Constant

fname = "Alice";
console.log ("Name:", fname);
PI = 3.14
fname = "Bob";
console.log ("Name:", fname);
console.log ("Age:", age);
console.log ("Height:", height);
/*
/**
 + = บวก
 - = ลบ
 * = คูณ
 / = หาร
 % = หารเอาเศษ
 */
/*
let number1 = '10';
let number2 = '3';

let result1 = number1 + number2;
console.log ("ผลบวก = ", result1);
*/
/*
 == เท่ากับ (เปรียบเทียบค่า)
 != ไม่เท่ากับ (เปรียบเทียบค่า)
 > มากกว่า
 < น้อยกว่า
 >= มากกว่าหรือเท่ากับ
 <= น้อยกว่าหรือเท่ากับ
  */
 
 /*let number1 = 5;
 let number2 = 5;
 /** let condition = number1 <= number2; // Boolean ค่าความจริง ture/false
 console.log ("condition=", condition);
    
 if (number1 > number2) {
        console.log ("number1 is greater than or equal to number2");
    } else if (number1 < number2) {
        console.log('this is else if');

    } else {
        console.log('this is else');
    }   
 
 */

/**
Grade 
    >=80 เป็นเกรด A
    >=70 เป็นเกรด B 
    >=60 เป็นเกรด C
    >=50 เป็นเกรด D
    <50 เป็นเกรด F
  
 */
//     let score = 75;
//  // if - else condition
//     if (score >= 80) {
//         console.log ("A");
//     } else if (score >= 70) {
//         console.log('B');
//     }else if (score >= 60)
//         console.log('C');
//     else if (score >= 50) {
//         console.log('D');
    
//     }else {
//         console.log('F');
//     }
/**
 *  && เเละ
 *  || หรือ      
 *  ! not หรือ ไม่ใช่
 * 
 */ 

// let number1 = 10
// let number2 = 20

// let condition = (number1 > 0) && (number2 > 0) // true && true = true
// console.log ("condition:", condition1)


// let age = 25
// let gender = 'male'
// if(age >= 18 && gender == 'male') {
//     console.log ("่คุณสามารถเข้าร่วมกิจกรรมได้");
    
// let number = 30

// if (number % 2 == 0) {
//     console.log ("เป็นเลขคู๋");
// }
// else {
//     console.log ("เป็นเลขคี่");
// }
/** 
while 
for
*/

// let count = 0;
// while (count <= 5) { //true 
//     //conter = conter + 1;
//     conter += 1
//     console.log ("while:", count);
// }

// for (let i = 0; i <= 5; i = i + 1) {
//     console.log ("for:", i);
// }


/** 
 array
*/


// let age1 = 25;
// let age2 = 30;
// let age3 = 35;  
// console.log (age1, age2, age3); // 25 30 35

// let ages = [25, 30, 35]; 
// console.log (ages); //{25, 30, 35}
// console.log (ages[1]); //25 30 35
 
// //เเทนที่ค่าในอาเรย์ฝ
// age = [40, 45, 50];
// console.log (ages); //{40, 45, 50}

// //ต่ออาเรย์
// ages.push (55);
// console.log (ages); //{40, 45, 50, 55}

// //ความยาวของอาเรย์
//     console.log (ages.length); //4
    
    
// //ลบค่าตัวสุดท้ายของอาเรย์
//  age.pop();
//  console.log(age);// [40, 45, 50]

//  if (ages.includes (45)) { //true
//     console.log ("เจอค่า 45 ในอาเรย์"); // พบ 45 ในอาเรย์
//  }
//   let numbers = [90, 60, 80, 40, 50];
//   numbers.sort(); // เรียงลำดับค่าในอาเรย์
//     console.log (numbers); // [40, 50, 60, 80, 90]

//     let number = ["John", "Alice", "Bob"];
//     names.push ("smith");
//     console.log (names); //["John", "Alice", "Bob", "Smith"]    
//     console.log (names.length);

//     for (let i = 0; i < names.length; i++) {
//         console.log (names[i]);
//     }

/**
object
*/

// let students = [
//     {
//         age: 20,
//         name: "Emma",
//         grade: "A"
//     },
//     {
//         age: 22,
//         name: "Liam",
//         grade: "B"
//     }
// ];

// for (let i = 0; i < students.length; i++) {
//     console.log("Student", (i + 1) + ":");
//     console.log("Name:", students[i].name);
//     console.log("Age:", students[i].age);
//     console.log("Grade:", students[i].grade);
// }

// // เพิ่มนักเรียนใหม่
// students.push({
//     age: 21,
//     name: "Olivia",
//     grade: "A"
// });

// console.log(students);

// ฟังก์ชัน
// function calculate_grade(score) {
//     if (score >= 80) {  
//         grade =  'A';
//     } else if (score >= 70) {
//         grade = 'B';
//     } else if (score >= 60) {
//         grade = 'C';
//     } else if (score >= 50) {
//         grade = 'D';
//     } else {
//         grade = 'F';
//     }
//     return grade;
// }
// // เรียกใช้ฟังก์ชัน
// // let student_score = 85;
// let student_grade = calculate_grade(student_score);
// console.log("Student's grade is:", student_score);

/** 
array
*/
 
// 
// let scores = [10, 20, 30, 40, 50];
 
// for(let i = 0; i < scores.length; i++) {
//     //console.log("Score at index '+ i + 'is: ", scores[i]);
//     console.log(`Score at index ${i} is: ${scores[i]}`);
// }

// // scores.forEach((s) => {
// //     console.log('score', s)
// // })
// scores = scores.map((s) => {
//     return s * 2
// })
 
// scores.forEach((s) => {
//     console.log ('new score', s)
// })

/** 
array
*/

// let scores = [10, 20, 30, 40, 50];

// // newScores = []

// for(let index = 0; index < scores.length; index++) {
//     console.log('score', scores[index])
//     // if (scores[index] >= 30) {
//     //     newScores.push (scores[index])
//     }

//     let newScores = scores.filter((s) => {
//     return s >= 30
//     })

// // console.log('newScores :', newScores)


//    newScores.forEach((ns) => {
//     console.log('new score', ns)
    
// })


/** 
Object + function
*/

// let students = [
//     {
//         name: 'kobi',
//         score: 95,
//         grade: 'A'
//     },
//     {
//         name: 'winnie',
//         score: 85,
//         grade: 'B'
//     }
// ];


// console.log('student:', students[0]);


// let student = students.find((s) => s.name === 'kobi');


// let doublescore_student = {
//     ...student,
//     score: student.score * 2
// };

// console.log('student:', student);
// console.log('doublescore_student:', doublescore_student);

// let highScore_student = students.filter((s) => s.score >= 118);

// console.log('highScore_student:', highScore_student);
https://github.com/samitananch-21/241-821-2568