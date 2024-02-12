class Customer {
    private _firstName: string;

    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

// create instance
let customer = new Customer("john", "doe");
customer.firstName = "martin";
customer.lastName = "dixon";

console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer)