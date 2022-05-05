// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

describe('shuffle', () => {
    it('takes in an array, removes the first item from the array and shuffles the remaining content.', () => {
            expect(shuffle(colors1)).toEqual(expect.arrayContaining( colors1));
            expect(shuffle(colors2)).toEqual(expect.arrayContaining(colors2));
        });
    });
  

    //b) Create the function that makes the test pass.

    // Red failure shuffle
    // x takes in an array, removes the first item from the array and shuffles the remaining content.
    // Create a function called shuffle that takes in an array
    // Use .shift to remove the first index of the array input
    // Loop through the array with a for loop
    // create a random index variable set to Math.floor(Math.random)
    // create a index element variable set to the array[randomindex]
    // Now swap by setting the array[i] = indexElement
    // 

    const shuffle = (array) =>{
        array.shift()
        for (let i = array.length -1; i >= 0 ; i --) {
            let randomIndex = Math.floor(Math.random()* (array.length))
            let indexElement = array[randomIndex]
      
         
            array[i] = indexElement
        } return array
      }
      
      console.log(shuffle(colors1))
      console.log(shuffle(colors2))

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe('minAndMax', () => {
    it('takes an array of numbers and returns an array of the minimum and maximum numbers in that order.', () => {
            expect(minAndMax(nums1)).toEqual([-8, 90]);
            expect(minAndMax(nums2)).toEqual([5,109]);
        });
    });
const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.

// Red failure minAndMax
    // x takes in an array, removes the first item from the array and shuffles the remaining content.
    // Create a function called MinAndMax that takes in array of numbers and returns the min and max values
    // create an empty array that will be used to hold the min and max value
    // create a variable newarr that will take the array and sort from smallest to largest
    // use .push newarr[0] to push the minimum value to the newarr variable
    // create a max num variable that is equal to the newarr array[newarr.length-1] give the last number(max)
    // take the resultarr and push maxnum and then return the result array


const minAndMax = (array) =>{
    resultarr = []
    newarr = array.sort((a,b)=> a - b )
    minnum = resultarr.push(newarr[0])
    maxnum = newarr[newarr.length-1]
    resultarr.push(maxnum)
    return resultarr
     
   }
   console.log(minAndMax(nums1))
   console.log(minAndMax(nums2))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]

describe('noDupes', () => {
    it('takes in two arrays as arguments and returns one array with no duplicate values.', () => {
            expect(noDupes(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1]);
        });
    });
  
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.

// Red failure noDupes
    //x takes in two arrays as arguments and returns one array with no duplicate values.
    // Create a function called noDupes that takes two arrays and returns an array with no duplicate values.
    // create variable filteredarr that is equal to array1.concat(array2)
    // now use .filter to return a subset of the original array
    // pass in value and index where the indexof(value) === index
    

const noDupes = (array1,array2) =>{
    filterarr = array1.concat(array2)
    return filterarr.filter((value,index) => filterarr.indexOf(value) === index )
  }
  console.log(noDupes(testArray1,testArray2))
  console.log(noDupes([12,4,13,4,7],[1,32,12,6,7,74]))
  