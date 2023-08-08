console.log('***** Music Collection *****')
let collection = []

console.log(collection);

//function to add albums to collection
//this needs to create a new object with the parameters
//it also needs to push it into the current collection array
function addToCollections(title, artist, yearPublished) {
    let newAddtion = {
        Title: title,
        Artist: artist,
        Released: yearPublished
    }
    collection.push(newAddtion);
    return newAddtion;
}

console.log(addToCollections("Dare to Be Stupid", "Weird Al Yankovick", "1985"))
console.log(collection)

//creating new album with title, artist, and yearPublished