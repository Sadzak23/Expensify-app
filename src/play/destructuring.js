{
const person = {
//  name: "Alex",
  age: 31,
  location: {
    city: "Belgrade",
    temp: 10
  }
};

const { name = "Anonimus", age } = person;
console.log(`${name} is ${age}`);

const {city, temp: temperature} = person.location;
console.log(`It's ${temperature} in ${city}`);

const book = {
  title: "Ego is the Enemy",
  autor: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published"} = book.publisher;
console.log(publisherName)
}

/////////// Array ///////////

const address = ["Grada Karare 11", "Kragujevac", "Srbija", "34000"];

const [street, city, state = "Serbia", zip] = address;
// [street, city, state, zip] => [, city, state]
console.log(`You are in ${city}, ${state}`)

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)