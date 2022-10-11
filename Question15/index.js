// Question 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

const dinnerInvite = () => {
    try {
        const invites = ['Ali', 'Hamza', 'Ali Hamza'];

        invites.forEach((ele, index) => {

            console.log(`Hi ${ele} I am inviting you to the dinner tommorrow at my house. Will you accept my invitation?`);
        })    

        console.log(`Mr. ${invites[0]} is not coming for dinner`);
        console.log(`Mr. ${invites[1]} is not coming for dinner`);
        invites.splice(0, 2, "Ahmed", "Akbar")
        invites.forEach((ele, index) => {

            console.log(`Hi ${ele} I am inviting you to the dinner tommorrow at my house. Will you accept my invitation?`);
        })    



    } catch (error) {
        throw new Error(error);
    }
}

dinnerInvite();