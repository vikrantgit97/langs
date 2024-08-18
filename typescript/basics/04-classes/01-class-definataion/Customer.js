var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
// lets creat an instace
var cutomer = new Customer("john", "doe");
console.log(cutomer.firstName);
console.log(cutomer.lastName);
console.log(cutomer);
