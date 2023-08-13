console.log('***** Music Collection *****')

//adding our array to start and logging it to make sure it works
const collection = []

console.log(collection);

//function to add albums to collection
//this needs to create a new object with the parameters
//it also needs to push it into the current collection array
function addToCollections(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return console.log(album);
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

// Creating Function to find by artist.
// I first need to make a loop that will pull all of the artist names out , then something to push those
// albums into the array
console.log(collection.artist)

function findByArtist(artistInput) {
    console.log("Searching Database for :", artistInput);
    let artistList = []
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist == artistInput) {
            artistList.push(collection[i]);

        }
    }
    console.log(artistList)
}

findByArtist("Weezer");
findByArtist("Weird Al Yankovick");
findByArtist("Madonna")


//working on stretch goals. This search has two criteria. If both critera match anything in the 
// collection array, it will add it to our searchList array. 
// If it doesnt, what i am trying to do is return a blank array, then return the whole collection list

function search(artistInput, year) {
    console.log("Searching Database for :", artistInput);
    for (let i = 0; i < collection.length; i++) {
        let searchList = []
        if (collection[i].artist === artistInput && collection[i].yearPublished === year) {
            searchList.push(collection[i]);
            console.log("Record Found:", searchList);
            return console.log(searchList)
        }
        else if (collection[i].artist !== artistInput || collection[i].yearPublished !== year) {
            console.log("No Record Found", searchList);
            console.log(searchList);
        } else {
            return console.log(collection);
        }

    }

}

//search("Ray Charles", "1957");
//search("Avril Lavigne", "2002");
//search("Weird Al Yankovick");
