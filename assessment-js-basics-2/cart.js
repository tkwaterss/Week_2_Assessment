///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
//using the reduce method to look at each price and add them together
const summedPrice = cart.reduce((acc,object) => {
    //each element is an object so object notation must be used to access price
    return acc + object.price;
},0)
//since elements are objects we must declar an initial value that is a number to begin adding
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
//writing a function to add tax and coupons
const calcFinalPrice = (cartTotal,couponValue,tax) => {
    // calculate the total with tax
    cartTotal *= (tax + 1);
    //return the taxed total with the coupons removed from the cost
    cartTotal -= couponValue;
    return cartTotal.toFixed(2);
}
console.log(calcFinalPrice(25,5,.05));


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
customer name: to identify the customer - string because it is a name
phone number: to alert the customer of a reservation being ready or such - string - should behave like a string, not a number
email: to send customers alerts about an upcoming reservation or such - string - only thing that can hold an email
address: if the restautant delivers food - string - only thing that can hold a full address
rating: to keep track of interactions, are they on time? tip well? - number - put a rating on a scale of 1 - 10

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
//creating a customer according to guidelines setout above
let customer = {
    name: 'Billy Bobby',
    phone: '123-456-7890',
    email: 'billybobby@billbob.com',
    address: '123 billybob lane, Billy Town TX, 12345',
    rating: 8
}
console.log(customer);