console.log('***** Music Collection *****')

const collection = []

// addToCollection

function addToCollection (title, artist, yearPublished, name, duration) { // 3 params title, artist, yearPublished
  let album = { // creat new object
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: []
  };
  album.tracks.push({name, duration});
  collection.push(album); // push object to array
  return album; // return new object
};

function addTrack (title, artist, name, duration) {
  for (let i=0; i<collection.length; i++)
  if (title === collection[i].title && artist === collection[i].artist){
    collection[i].tracks.push({name, duration})
  }
}



console.log( addToCollection ('The Beacon', 'Shy,Low', 2021,'The Beacon 1', 150) );
addTrack('The Beacon', 'Shy,Low', 'The Beacon 2', 250);
addTrack('The Beacon', 'Shy,Low', 'The Beacon 3', 350);

console.log( addToCollection ('Dying Surfer', 'All Them Witches', 2015, 'Dying Surfer 1', 150) );
addTrack('Dying Surfer', 'All Them Witches', 'Dying Surfer 2', 250);
addTrack('Dying Surfer', 'All Them Witches', 'Dying Surfer 3', 350);

console.log( addToCollection ('Ornament', 'Teethgrynder', 2020, 'Ornament 1', 150) );
addTrack('Ornament', 'Teethgrynder', 'Ornament 2', 250);
addTrack('Ornament', 'Teethgrynder', 'Ornament 2', 350);

console.log( addToCollection ('Sackcloth N Ashes', '16 Horsepower', 1995, 'Sackcloth N Ashes', 150) );
addTrack('Sackcloth N Ashes', '16 Horsepower', 'Sackcloth N Ashes 2', 250);
addTrack('Sackcloth N Ashes', '16 Horsepower', 'Sackcloth N Ashes 3', 350);

console.log( addToCollection ('Phanerozoic', 'The Ocean', 2020, 'Phanerozoic 1', 150) );
addTrack('Phanerozoic', 'The Ocean', 'Phanerozoic 2', 250);
addTrack('Phanerozoic', 'The Ocean', 'Phanerozoic 3', 350);

console.log( addToCollection ('Heliocentric', 'The Ocean', 2010, 'Heliocentric 1', 150) );
addTrack('Heliocentric', 'The Ocean', 'Heliocentric 2', 250);
addTrack('Heliocentric', 'The Ocean', 'Heliocentric 3', 350);

console.log(collection);

// showCollection

function showCollection ( array ) { // empty array param
    console.log(`There are ${array.length} albums in your collection`); // log number of items in array
    for (let i = 0; i < array.length; i++) { // loop over array, log each album info
      console.log(`${array[i].title.toUpperCase()} by ${array[i].artist.toUpperCase()}, published in ${array[i].yearPublished}`);// format info: TITLE by ARTIST, published in YEAR
    }
}
console.log('****showCollection****');
showCollection(collection);


// findByArtist

function findByArtist ( artist ) { // string param artist
  let foundArtist = [] // create array to store result
  for (let i = 0; i < collection.length; i++){ // loop over collection
      if ( artist === collection[i].artist) { // check for artist match to object key
      foundArtist.push( collection[i] );// add any objects with matching artist to array
    } // complete if statment -- I keep adding the return statement here, but the loop does not complete before returning the result...
} return foundArtist; // complete loop return array with matching objects
  return foundArtist = ['Nothing Found']; // return if loop finds no match
}

console.log('****findByArtist****');
console.log('Do you have anything by All Them Witches?', findByArtist( 'All Them Witches' )); // returns matching artist
console.log('Do you have anything by The Ocean?', findByArtist( 'The Ocean' )); // returns multiple matches
console.log('Do you have any Van Halen?', findByArtist( 'Van Halen' )); // returns nothing found



// search

function search (artist, year) { // input params artist, year
  let searchResult = [] // create array to store result
  for(let i = 0; i < collection.length; i++) { // loop over collection
    if ( artist === collection[i].artist && year === collection[i].yearPublished ) { // check for matching criteria to object key
     searchResult.push ( collection[i] ); // add items matching from collection to new array
      return searchResult; // return new array of matching search criteria
   } if ( artist === undefined || year === undefined) {
        return collection; // if params are not provided return all albums in Collection
      } // second if statement
    } // complete loop
    return searchResult = [] // return empty array if no matching results
};

console.log('****search****');
console.log('What do you have by The Ocean from 2020?', search( 'The Ocean', 2020));
console.log('What do you have by The Ocean from 2019?', search( 'The Ocean', 2019));
console.log('What do you have by All Them Witches from 2015?', search( 'All Them Witches', 2015));
console.log('What do you have released in 2019?', search( undefined , 2019));
console.log('What do you have released in 2019?', search( 2020 , undefined ));









//
