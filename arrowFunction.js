//function decoratior
function breakfast(){
    console.log("Breakfast is ready");
}

//anonymous function
const lunch = function() {
    console.log("Lunch is ready");
}

//Arrow function
const dinner = () => {
    console.log("The dinner is ready!");
}

//Arrow function with parameters
const foodYouLove = (food) => {
    console.log(`I love ${food} a lot!`);
}

//If the code inside the function have only one line you simplify in this:
const foodYouLove1 = (food) => console.log(`My favorite food is ${food}`);

//And if have only one parameter you can remove the parenthesis.
const foodNotLike = food => console.log(`I Don't like ${food}`);


breakfast();
lunch();
dinner();
foodYouLove("Pizza");
foodYouLove1("Cheesecake");
foodNotLike("Cow's organs");