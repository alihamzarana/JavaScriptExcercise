// Question 45

// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s 
// returned to make sure all the information was stored correctly.
const prompt = require('prompt-sync')({ sigint: true })

const car_info = () => {
    let manufacturer = false, model = false, keyword = false, car;

    while (!manufacturer) {
        const manufacture = prompt('Enter Manufacturer Name?')
        if (manufacture.length) {
            manufacturer = true
        }
        car = { ...car, manufacture }
    }

    while (!model) {
        const modelName = prompt('Enter Model Name?')
        if (modelName.length) {
            model = true
        }
        car = { ...car, modelName }
    }

    while (!keyword) {
        const keywords = prompt('Enter keyword?')
        if (keywords.length) {
            keyword = true
        }
        car = { ...car, keywords }
    }

    const color = prompt('Enter color?')
    const door = prompt('Enter door?')

    car = { ...car, color, door }

    console.log(car);

}

car_info();