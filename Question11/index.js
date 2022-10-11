// Question 11
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

const friendsName = () => {
    try {
        const names = ['Ali', 'Hamza', 'Ali Hamza'];

        names.forEach(ele => {
            console.log(ele);
        })

    } catch (error) {
        throw new Error(error)

    }
}

friendsName();

