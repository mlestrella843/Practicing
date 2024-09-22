const listIngredients = [ 'flour', 'sugar', 'eggs', 'butter', 'chocolate'];
const findIngredients = (ingredient) => {
    
    if ( listIngredients.includes(ingredient) ) {
        console.log(`we found the ${ingredient}, so we'll do a chocolate cake`);
    }
    else {
        console.log(`we need to by the ${ingredient} to can do a chocolate cake`);
    }
}

findIngredients("chocolate");
