console.log('***** Music Collection *****')

//adding our array to start and logging it to make sure it works
const collection = []

console.log(collection);

//function to add albums to collection
//this needs to create a new object with the parameters
//it also needs to push it into the current collection array
function addToCollections(title, artist, yearPublished) {
    let newAddtion = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(newAddtion);
    return console.log(newAddtion);
}
//I am doing a console log to make sure the function works as intended. 

console.log(addToCollections("Dare to Be Stupid", "Weird Al Yankovick", "1985"))

//creating 6 new album with title, artist, and yearPublished. 

addToCollections("Let Go", "Avril Lavigne", "2002");

addToCollections("Weezer", "Weezer", "1994");

addToCollections("Running With Scissors", "Weird Al Yankovick", "1999");

addToCollections("No Need to Argue", "Cranberries", "1994");

addToCollections("Californication", "Red Hot Chili Peppers", "1999");

addToCollections("Green Album", "Weezer", "2001");

console.log(collection);

//Adding a showCollection function, parameters are an array, should console log the number of items in the array. 
//`TITLE by ARTIST, published in YEAR`.

function showCollection(array) {
    console.log("Collected Works:", collection.length)
    for (let album of array) {
        console.log(album.title, "by", album.artist, "published in,", album.yearPublished);
    }
}

showCollection(collection);