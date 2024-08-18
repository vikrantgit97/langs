"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
//create an instance
let customer = new Customer_1.Customer("john", "cena");
console.log(customer.firstName);
console.log(customer.lastName);
