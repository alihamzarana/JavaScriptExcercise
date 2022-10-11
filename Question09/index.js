// Question 09
// Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.

const favouriteNumber = () => {
    try {
        /* First it will store the number in the variable and then store that 
          variable with a message in second variable and print the message */
        const favNumber = 147;
        const message = `My favourite number is ${favNumber}`;
        console.log(message);
    } catch (error) {
        throw new Error(error)
    }
}

favouriteNumber();