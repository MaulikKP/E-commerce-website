class Customer {

    private _firstName: string
    private _lastName: string;
    

    constructor(thrFirst: string, theLast: string) {

        this._firstName = thrFirst;
        this._lastName = theLast
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

let myCustomer = new Customer("maulik", "patel");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
