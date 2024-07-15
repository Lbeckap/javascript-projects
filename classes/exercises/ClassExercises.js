// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, checkOutCount, isDiscarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numOfPages = numOfPages;
        this.checkOutCount = checkOutCount;
        this.isDiscarded = isDiscarded;
    }
    dispose(currentYear) {
        if (currentYear - this.copyrightDate > 5) {
            this.isDiscarded = true;
         }
         if (this.checkOutCount > 100) {
            this.isDiscarded = true;
         }
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, checkOutCount, isDiscarded) {
        super(title, author, copyrightDate, isbn, numOfPages, checkOutCount, isDiscarded);
    }
    checkout(num) {
        this.checkOutCount += num;
     }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, checkOutCount, isDiscarded) {
        super(title, author, copyrightDate, isbn, numOfPages, checkOutCount, isDiscarded);
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrej = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, false);

let topSecretManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, false);

console.log(prideAndPrej,topSecretManual);
// Code exercises 4 & 5 here:

topSecretManual.checkout(5);
topSecretManual.dispose(2024);


console.log(prideAndPrej, topSecretManual);