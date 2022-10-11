// Question 16
// More Guests: You just found a bigger dinner table,
// so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program
// informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.


const invites = ['Ali', 'Hamza', 'Ali Hamza'];
const dinnerInvite = (invites) => {
    try {

        invites.forEach((ele, index) => {

            console.log(`Hi ${ele} I am inviting you to the dinner tommorrow at my house. Will you accept my invitation?`);
        })
      
    } catch (error) {
        throw new Error(error);
    }
}

invites.splice(0, 2, "Ahmed", "Akbar")
dinnerInvite(invites);
console.log('I found a bigger Dinner Table.')
invites.unshift('Fahad');
// const middle = invites[Math.round((invites.length - 1) / 2)];
const middle = Math.floor(invites.length / 2);
invites.splice(middle, 0,"Jawad");
dinnerInvite(invites);


