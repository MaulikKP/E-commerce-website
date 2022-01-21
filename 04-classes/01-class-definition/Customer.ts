class Customer {

    firstName: string
    lastName: string;

    constructor(thrFirst: string, theLast: string) {

        this.firstName = thrFirst;
        this.lastName = theLast
    }

}

let myCustomer = new Customer("maulik", "patel");
/*
myCustomer.firstName = "Maulik";
myCustomer.lastName = "Patel";
*/
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
