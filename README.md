# Lotide Library
*W01D1 + W01D2*

## Contents
* assertEqual(arr1, arr2) - returns a message for assertion pass or fail based on two arguments (actual, expected)
* head(arr) - returns the first element of an array
* tail(arr) - returns a new array that contains all the elements of an inputted array expect for index0 ("the head of the inputted array")
* eqArrays(arr1, arr2) - returns assertion after comparing two arrays (utilitzes assertEqual() for assertion)
* assertArraysEqual(arr1, arr2) - returns a console.log with appropriate assert message after comparing two arrays 
* without(sourceArr, removeItemArr) - returns a new array after removing items from a source array (takes in two arrays as parameters/arguments)
* withoutAlternative(sourceArr, removeItemArr)) - same as without() but alternative way of writing the code for it
* withoutAlternative2(sourceArr, removeItemArr)) - an even more refracted way of wrting without()
* flatten(arr) - condenses nested arrays (one nested level in) into a one level array
* middle (arr) - returns the middle element(s) of an array (as an array; also contains assertion message)
* countOnly(allItems, itemsToCount) - returns an object that is the result of counting certain items in an array (based on criteria listed in another object)
* countLetters(words) - returns an object that is the result of counting letters in a sentence (no spaces)
* letterPositions(sentence) - returns an object that contains keys (letters in sentence) and values (indexes in which they appear in sentence)
* findKeyByValue(obj, value) - returns the name of the key that contains the value that is the same as an inputted one
* eqObject(obj, obj) - compares if two objects are the same assuming all values are arrays or primitive data (i.e. no values are objects)
* assertObjectsEqual(obj,obj) - prints an assertion method after comparing two objects
* maps(array, callback) - loops over elements of an array, uses each element as a parameter for a CB function, pushes item into a new array
* findkey(object, callback) - returns key
* takeUntil(array, callback) - returns elements in an array until the callback(element) is true.
* eqObjectsRecursion(obj, obj) - compares  nested objects and returns true/false.
* eqArrayRecursion(arr1, arr2) - can compare nested arrays and returns true/false.