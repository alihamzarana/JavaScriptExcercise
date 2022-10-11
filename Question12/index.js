// Question 12
// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.

const friendsName = () => {
    try {
        const names = ['Ali', 'Hamza', 'Ali Hamza'];

        names.forEach(ele => {
            console.log(`Hi ${ele}, how are you?`);
        })

    } catch (error) {
        throw new Error(error)

    }
}

friendsName();