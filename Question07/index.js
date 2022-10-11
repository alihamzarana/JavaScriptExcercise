// Question 08
// Number Eight: Write addition, subtraction, multiplication, and division operations 
// that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

const numberEight = () => {
    try {

        console.log("Addition", 4+4);

        console.log("Multiplication", 4 * 2);

        console.log("Subtraction", 16 - 8);

        console.log("Division", 16 / 2);

    } catch (error) {
        console.log("error", error);
        throw new Error(error)
    }
}

numberEight();