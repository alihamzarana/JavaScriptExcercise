// Question 14
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

const dinnerInvite = () => {
    try {
        const invites = ['Ali', 'Hamza', 'Ali Hamza'];

        invites.forEach((ele, index )=> {
            console.log(`Hi ${ele} I am inviting you to the dinner tommorrow at my house. Will you accept my invitation?`);
        })
    } catch (error) {
        throw new Error(error);
    }
}

dinnerInvite();