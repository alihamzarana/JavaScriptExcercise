// Question 29
// Favorite Fruit: Make a array of your favorite fruits, and then 
// write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements.Each should check whether a certain kind of fruit 
// is in your array.If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favorite_fruits = ["Grapes", "Apple", "Oranges"];

    favorite_fruits.forEach((fruit) => {
        if(fruit == "Grapes") {
            console.log(`I really like ${fruit}!`);
        }
        if (fruit == "Apple") {
            console.log(`I really like ${fruit}!`);
        }
        if (fruit == "Guave") {
            console.log(`I really like ${fruit}!`);
        }
        if (fruit == "Oranges") {
            console.log(`I really like ${fruit}!`);
        }
        if (fruit == "Melon") {
            console.log(`I really like ${fruit}!`);
        }
    });
