// Question 3
// Name Cases: Store a person’s name in a variable, and 
// then print that person’s name in lowercase, uppercase, and titlecase.


const titleCase = (str) => {
    try {
        const lowCase = str.toLowerCase();
        const upCase = str.toUpperCase();

        console.log("toLowerCase", lowCase);
        console.log("toUpperCase", upCase);

        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');

    } catch (error) {
        console.log("Error", error)
        throw new Error(error);
    }

}
const output = titleCase("ali hamza");
console.log("titleCase output", output);