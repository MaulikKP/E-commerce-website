var Customer = /** @class */ (function () {
    function Customer(thrFirst, theLast) {
        this.firstName = thrFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("maulik", "patel");
/*
myCustomer.firstName = "Maulik";
myCustomer.lastName = "Patel";
*/
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
