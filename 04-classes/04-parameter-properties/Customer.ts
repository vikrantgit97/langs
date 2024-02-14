class Customer {

    constructor(private _firstName: string, private _lastName: string) {

    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this.firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

//create instance
let customer = new Customer("satya", "jeet");

console.log(customer.firstName);
console.log(customer.lastName);