const buyFlightTicket  = () => {    //Habran tres posibles resultados: pending, resolved or rejected.

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;

            if(error){
                reject(" Sorry your payment not was succesful");
            }else{
                resolve(" Thank you, your payment was succeful");
            }
        }, 3000)
    })
}
buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error));