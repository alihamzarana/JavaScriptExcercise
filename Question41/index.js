// Question 40

//  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

const magicians = ['Magician One','Magaician Two','Magaician Three'];

const show_magicians = (magicians) => {
    magicians.forEach((element) => {
        console.log(element)
    })
}

show_magicians(magicians);