// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, check) {
  names.forEach((element, index) => {
    check(element, index);
  });
};

const checkWaldo = (name, index) => {
  if (name === 'Waldo') {
    console.log(`Found Waldo at index ${index}!`);
  }
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], checkWaldo);
