// Question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
// for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message
// saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting
// them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure 
// you actually have an empty list at the end of your program.

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

invites.splice(0, 2, "Ahmed", "Akbar");
dinnerInvite(invites);
console.log('I found a bigger Dinner Table.');
invites.unshift('Fahad');
console.log("invites", invites)
// const middle = invites[Math.round((invites.length - 1) / 2)];
const middle = Math.floor(invites.length / 2);
invites.splice(middle, 0, "Jawad");
dinnerInvite(invites);

while (invites.length > 2) {
    const name = invites.pop()
    console.log(`Hi ${name}, I am sorry I can’t invite them to dinner`);  
 }


invites.forEach((ele, index) => {
    console.log(`Hi ${ele}, You are still inited to dinner`);
})

while (invites.length) {
    invites.pop();
}
console.log(`Empty list`, invites);


