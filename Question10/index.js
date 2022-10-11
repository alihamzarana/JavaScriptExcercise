// Question 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.

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