///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
//creating an object called pizza with related keys and values
let pizza = {
    name: "Billy's Special",
    price: 4.20,
    category: 'entree',
    popularity: 420,
    rating: 100,
    tags: ['Billy','Pizza','Special','cheese','meat']
}


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
// console.log(pizza.popularity);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
// console.log(pizza.tags[1]);


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let {price} = pizza;
// console.log(price);

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let {category} = pizza;
// console.log(category);

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
//creating multiple instance of pizza objects in an array
let foodArr = [
    {
        name: "Meat Lovers",
        price: 5,
        category: 'entree',
        popularity: 12,
        rating: 100,
        tags: ['sausage', 'peperoni', 'steak', 'chicken']   
    },
    {
        name: "Vegi",
        price: 7,
        category: 'entree',
        popularity: 22,
        rating: 111,
        tags: ['onions', 'peppers', 'olives', 'brocolli']   
    },
    {
        name: "Mushroom",
        price: 1,
        category: 'entree',
        popularity: 17,
        rating: 112,
        tags: ['mushrooms','onions','sausage']   
    },
    {
        name: "Hawaiian",
        price: 9,
        category: 'entree',
        popularity: 41,
        rating: 96,
        tags: ['ham', 'pineapple']   
    },
    {
        name: "Billy's Special",
        price: 8,
        category: 'entree',
        popularity: 38,
        rating: 103,
        tags: ['mushrooms', 'pineapple','olives']   
    }
]
// console.log(foodArr);

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
//using the .filter method to make an array of only pizzas with a certain tag
const filteredFood = foodArr.filter(object => object.tags.includes('pineapple'))
   
// console.log(filteredFood);


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
//main solution
//using the filter method in a function to sort the pizzas according to 3 parameters
const filterByPropertyTwo = (property,number,type) => {
    //setting the filtered array equal to a new array variable
    let filteredArray = foodArr.filter((object) => {
        //checking if above or below
        if (type === 'above') {
            //return true or false for filter method, adds or does not add object depedning on criteria
            return object[property] >= number
        } else {
            return object[property] <= number
        }
    })
    return filteredArray;
}
//trying an alternate idea, ended up longer but catches incorrect type inputs
const filterByProperty = (property,number,type) => {
    let filteredArray = []
    if(type === 'above') {
        filteredArray = foodArr.filter(object => object[property] >= number);
    } else if (type === 'below') {
        filteredArray = foodArr.filter(object => object[property] <= number);
    } else {
        "Please enter a correct value for type, 'above' or 'below'"
    }
    return filteredArray;
}
//one liner for fun
const filterByPropertyThree = (property,number,type) => filteredArray = foodArr.filter((object) => (type === 'above') ? object[property] >= number : object[property] <= number);

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.
    You'll have to console.log to see the filtered array
*/

//CODE HERE
// console.log(filterByProperty('rating',100,'below'));
// console.log(filterByPropertyTwo('rating',100,'below'));
console.log(filterByPropertyThree('rating',100,'below'));
console.log(filteredArray);