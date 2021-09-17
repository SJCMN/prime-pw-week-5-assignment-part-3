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
// array param
// log number of items in array
// loop over array, log each album info
// title by artist, published in year

function showCollection () {
  
}
