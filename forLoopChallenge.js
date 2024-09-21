
// This array have 3 objects, and each object have 2 properties; name_student and city
const students = [
   { name_student: 'John', city: 'New York' },
   { name_student: 'Anna', city: 'Paris' },
   { name_student: 'Ben', city: 'Monaco'}
];

// Create a for loop that will iterate over the student array and console.log the name_student and city of each student

for ( const student of students ){
    console.log(`${student.name_student} lives in ${student.city}`);
};