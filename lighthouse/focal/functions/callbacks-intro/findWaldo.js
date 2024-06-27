const findWaldo = function(names, found) { // found is callback function
  // call names array and loop using forEach
  names.forEach((name, index) => { // check for waldo
    if (name === "Waldo") {
      found(index); // << callback using index
    }
  });
};

const actionWhenFound = function(index) { // create param

  console.log(`Found Waldo at index: ${index}`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);