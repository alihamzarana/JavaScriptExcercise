// Question 37

// Large Shirts: Modify the make_shirt() function so that shirts are large 
// by default with a message that reads I love JavaScript. Make a large shirt and a 
// medium shirt with the default message, and a shirt of any size with a different message.

const make_shirt = (size = 'Large', text = 'I love JavaScript') => {
    console.log(`Size of T-Shirt ${size}`);
    console.log(`Text on T-Shirt ${text}`);
}
make_shirt();
make_shirt("Large");
make_shirt("Medium");
make_shirt('XXL', 'Never Giveup');