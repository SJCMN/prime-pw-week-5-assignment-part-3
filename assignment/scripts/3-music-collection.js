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

console.log( addToCollection ('The Beacon', 'Shy,Low' , 2021) );
console.log( addToCollection ('Dying Surfer', 'All Them Witches' , 2015) );
console.log( addToCollection ('More Constant', 'SubRosa' , 2013) );
console.log( addToCollection ('Ornament', 'Teethgrynder' , 2020) );
console.log( addToCollection ('I Seen What I Saw', '16 Horsepower' , 1995) );
console.log( addToCollection ('Ghost Not Found', 'Glasgow Comma Scale' , 2016) );

console.log(collection);

// showCollection

function showCollection ( array ) { // empty array param
    console.log(`There are ${array.length} albums in your collection`); // log number of items in array
    for (let i = 0; i < array.length; i++) { // loop over array, log each album info
      console.log(`${array[i].title.toUpperCase()} by ${array[i].artist.toUpperCase()}, published in ${array[i].yearPublished}`);// format info: TITLE by ARTIST, published in YEAR
    }
}

showCollection(collection);
