const player = {
    name_player: 'Lebron James',
    club: 'Lakers',
    address: {
        city: 'Los Angeles'
    }
};

// console.log(player.name);
// console.log(player.address.city);

// Destructuring consist in take the keys of an object and put into curly brakes
const { name_player, club, address: { city } } = player;
console.log(`This player called ${name_player} is the most famous player of the ${club} team` );
console.log(`He lives in ${city}`);

const student = {
    name_student: "Kyle",
    age: 24,
    project: {
        diceGame: "Two players dice game using Javascript",
        spiderman: "The man that flies like as an spider"
    }
}

const { name_student, age, project: {diceGame, spiderman} } = student
console.log(`The student name is ${name_student} and he is ${age} years old`);
console.log(`His projects are ${diceGame} and ${spiderman}`);