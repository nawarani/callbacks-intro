// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((element, index) => {
    if (element === 'Waldo') {
      found(index);
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], (index) => {
  console.log(`Found Waldo at index ${index}!`);
});
