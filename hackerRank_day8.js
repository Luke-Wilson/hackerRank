//Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber. If an entry for a name is not found, print 'Not found' instead.

// O - bunch of lines in form of name=phoneNumber or 'Not found'
// I - first line contains an integer, n, denoting the number of entries in the phone book.
// C -
// E -

function solution (input) {
  input = input.split('\n');
  var [n, ...rest] = input;
  var phonebook = {};
  for (var i = 0; i < n; i++) {
    var entry = rest.shift().split(' ');
    phonebook[entry[0]] = entry[1];
  }

  rest.forEach(query => {
    if (phonebook[query]) {
      console.log(`${query}=${phonebook[query]}`)
    } else {
      console.log('Not found');
    }
  });
}

solution(`3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`)