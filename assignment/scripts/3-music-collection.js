console.log('***** Music Collection *****')

const collection = []

// addToCollection
// 3 params title, artist, yearPublished
// creat new object
// push object to array

function addToCollection (title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  console.log(album); // log each album object as added
  return album; // return new object
}

console.log( addToCollection ('The Beacon', 'Shy,Low', 2021) );
console.log( addToCollection ('Dying Surfer', 'All Them Witches', 2015) );
console.log( addToCollection ('More Constant', 'SubRosa', 2013) );
console.log( addToCollection ('Ornament', 'Teethgrynder', 2020) );
console.log( addToCollection ('I Seen What I Saw', '16 Horsepower', 1995) );
console.log( addToCollection ('Ghost Not Found', 'Glasgow Comma Scale', 2016) );

console.log(collection);

// showCollection

function showCollection ( array ) { // empty array param
    console.log(`There are ${array.length} albums in your collection`); // log number of items in array
    for (let i = 0; i < array.length; i++) { // loop over array, log each album info
      console.log(`${array[i].title.toUpperCase()} by ${array[i].artist.toUpperCase()}, published in ${array[i].yearPublished}`);// format info: TITLE by ARTIST, published in YEAR
    }
}

showCollection(collection);

// findByArtist




// return empty array if no results found
function findByArtist ( artist ) { // string param artist
  let foundArtist = [] // create array to store result
  for (let i = 0; i < collection.length; i++){ // loop over collection
      if ( artist === collection[i].artist) { // check for artist match to object key
      foundArtist.push( artist );// add any objects with matching artist to array
      return foundArtist; // return the array with matching results
    } // complete if statment
} // complete loop
  return foundArtist = ['Nothing Found']; // return if loop finds no match
}


console.log('Do you have any All Them Witches?', findByArtist( 'All Them Witches' )); // returns matching artist
console.log('Do you have any Van Halen?', findByArtist( 'Van Halen' )); // returns nothing found



// search
// input params artist, year
// return new array of objects matching search criteria
// return empty array if no matching results
// if params are not provided return all albums in Collection

function search (artist, year) {
  let searchResult = []
 for(let i = 0; i < collection.length; i++) {
   if ( artist === collection[i].artist || year == collection[i].year ) {
     searchResult.push ( artist, year ):
     return searchResult;
   }
 } else if ( artist === undefined || year === undefined){
   return collection;
 };
  return: searchResult = ['No Matches Are Found']
};








//
