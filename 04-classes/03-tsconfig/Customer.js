"use strict";
class Customer {
    constructor(thrFirst, theLast) {
        this._firstName = thrFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("maulik", "patel");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
