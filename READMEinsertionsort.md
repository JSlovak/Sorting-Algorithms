Explain to a five year old how the algorithm works (3-4 sentences max)
Psuedo code for each sorting implementation
In your own words, describe the performance of the alogirthm for the following cases:
Best case scenario
Worst case scenario

#Insertion-sort --

Selects the first element in an array and pushes to a new array.
Then increments through the initial array.
As each element from the first array is pushed to the new array,
it places that element in the correct order.
and returns that new array.

[ 1,6,8,2,5]---> [ ]
                 [1]
                 [1,6]
                 [1,6,8]
                 [1,2,6,8]
                 [1,2,5,6,8]

Psuedo-code
--

insertion sort is a function.
  function insertionSort(arr){
  newArr = [];
  loop through arr(i = 0){
    if (newArr.length === 0){
    newArr.push(arr[i])
    }
      else {

      }
  }

  return newArr
  }