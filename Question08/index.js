// Question 08
// You should create four lines that look like this:
// console.log(5 + 3)

const printEight = () => {
    try {
        // This will always print 8. 
        console.log(`5 + 3 = ${5 + 3}`);
        console.log(`5 + 3 = ${16 - 8}`);
        console.log(`5 + 3 = ${16 / 2}`);
        console.log(`5 + 3 = ${4 + 4}`);
    } catch (error) {
        console.log("Error", error);
        throw new Error(error);
    }
}

printEight();