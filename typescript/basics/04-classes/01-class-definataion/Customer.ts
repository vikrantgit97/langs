class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirstName: string, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
}
// lets creat an instace
let cutomer = new Customer("john", "doe");

console.log(cutomer.firstName);
console.log(cutomer.lastName);
console.log(cutomer);