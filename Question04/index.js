// Question 04
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:

const famousQuote = () => {

    try {
        
        console.log(`Nelson Mandela once said,"Education is the most powerful weapon you can use to change the world."`);

    } catch (error) {
        console.log("Error", error);
        throw new Error(error);
    }
}

famousQuote();