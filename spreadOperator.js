
//**** First Example */
let contacts = [ "Maria", "Jose", "Ian" ];

// The spread operator allow me obtain the values of the contacts array, not the reference.
// Literally I'm doing a copy from this array and creating a new one. with this I can be accurate that my personalFriends should be the names that have at the beginning contacts.
let personalFriends = [ "David", ...contacts, "Alberto" ];

//If I try to add some new friend to contacts array that shouldn't reflects into personalFriends array
contacts.push("Daniel");

console.log(personalFriends);

//**** */ 2. example:

let person = {
    name: "David",
    age: "24",
    city: "California"
}

//With the spread operator I can add all person object information to new object employee.
let employee = {
    ...person,
    salary: 5000,
    insurance: true,
    position: "Software Developer"

}

console.log({ employee });