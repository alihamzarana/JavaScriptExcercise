// Question 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

const dinnerInvite = () => {
    try {
        const invites = ['Ali', 'Hamza', 'Ali Hamza'];

        invites.forEach((ele, index) => {
            console.log(`Hi ${ele} I am inviting you to the dinner tommorrow at my house. Will you accept my invitation?`);
        })
        console.log(`I am inviting ${invites.length} people to Dinner`)
    } catch (error) {
        throw new Error(error);
    }
}

dinnerInvite();