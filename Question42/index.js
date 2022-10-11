// Question 42

// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians
//  by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

const magicians = ['Magician One', 'Magaician Two', 'Magaician Three'];

const make_great = (magicians) => {
    magicians.forEach((element) => {
        console.log(`Great ${element}`)
    })
}

make_great(magicians);
