# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stephanieli/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(arg1, arg2)`: takes two arguments as inputs, compares them, and returns an assertion message of pass or fail.
* `assertArraysEqual(arr1, arr2)`: takes in two arrays as arguments, compares them, and returns an assertion message of pass or fail.
* `assertObjectEqual(obj1, obj2)`: takes in two objects as arguments, and returns an assertion message of pass or fail.
* `countLetters(string)`: takes in a string as an arugment, removes all the whitespaces, and returns an object that contains keys (letters in string) and their respective values (number of counts the respect key appears in the string).
* `countOnly(arr, obj)`: takes in two arguments: an array which contains the list of all the items; and an object in which the values of the keys will indicate if the key "item" should be counted. The return is an object that contains the counts of all the keys that should be counted. 
* `eqArrays(arr1, arr2)`: takes in two arrays as arguments, compares them, and returns true or false.
* `eqObjects(obj1, obj2)`: takes in two objects as arguments, and returns true or false.
* `findKey(obj, callback)`: takes an object and a callback as arugments. The keys of the object are used as arguments for the *callback* function. The first key to return a truthy value after being run through the *callback* function will be the return value of the findKeyfunction.
* `findKeyByVaule(obj, value)`: takes in an object and a value, and returns the name of the key that contains the value that is the same as the inputted one.
* `flatten(arr)`: takes an array as the argument, and condenses all elements in the array into a one-level array.
* `head(arr)`: takes in an array as an argument and returns the first element of the array.
* `letterPositions(string)`: takes in a string as an arugment, and returns an object that contains keys (letters in string) and values (array with indexes in which they appear in the string).
* `maps(arr, callback)`: takes in an array and a callback as arguments. It loops over the elements of the array and uses each element as argument for the *callback* function. The resulting values are then pushed into a new array. This new array is the return value.
* `middle(arr)`: takes an array as the argument, and returns the middle element(s) into a new array.
* `tail(arr)`: takes in an array as an argument and returns all the elements expect for the first one.
* `takeUntil(arr, callback)`: takes an array and a callback as arguments. The elements of the array are used as arguments for the *callback* function. If the return value of the element used in the *callback* function is falsy, it will push that element into a new array. This will continue until the result of the *callback* function is truthy. The return value of takeUntil function is the new array.
* `without(arr1, arr2)`: takes in two arrays as arguments, the first, arr1, is the source array and the second, arr2, is the array with items that should be removed from the source array. The return is a *new* array.



