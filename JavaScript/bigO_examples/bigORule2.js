// Big O Rule 2: Remove Constants

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;
    // O(n/2) == Half of the items
    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    // O(100)
    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

//Total = O(1) + O(n/2) + O(100)
//      O(1+ n/2 + 100)
//      O(n/2 + 1)
//      O(n + 1)
//      O(n)
