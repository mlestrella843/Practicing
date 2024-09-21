function addressMaker( city, state) {
    const newAddress = { 
        newCity: city, newState: state
    };
    return newAddress;
}

// console.log(addressMaker( 'Calgary', 'Alberta') );

// Another way to do that is that you can put directly the properties at the new constant, like this.
function addressMaker( city, state) {
    const newAddress = { city,  state };
    return newAddress;
}
//console.log(addressMaker( 'Calgary', 'Alberta') );



// Lets do this challenge: we'll use templates literals, object literals and destructuring

function addressMaker(address) {
    const newAddress = { 
        city: address.city, 
        state: address.state,
        country: 'United State'
    };
    console.log(newAddress)
}
//addressMaker( { city: 'Calgary', state: 'Alberta'} );


//one way to resolve this is 
function addressMaker(address) {
    const { city, state } = address;
    const newAddress = { 
        city, 
        state,
        country: 'Canada'
    };
    return newAddress
  //  console.log(`Im living in ${newAddress.city} in the province ${state} in ${newAddress.country}`);
}
console.log(addressMaker( { city: 'Calgary', state: 'Alberta' } ) );