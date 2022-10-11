// Question 06
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const strippingNames = () => {
    try {
        const famous_person = "Nelson Mandela";
        const message = `\t${famous_person}\n  once said,"Education is the most powerful weapon you can use to change the world."`;
        const message2 = `${famous_person} once said,"Education is the most powerful weapon you can use to change the world."`;

        console.log(message);
        console.log(message2)

    } catch (error) {
        console.log("Error", error);
        throw new Error(error);
    }
}

strippingNames();