module.exports = function mergeSort(arr) {
// Base case.
  if(arr.length <= 1){
    return arr;
  }
// Divide and conquer !!
  var leftHalf = arr.slice(0, arr.length/2);
  var rightHalf = arr.slice(0,arr.length/2);
  var leftSorted = mergeSort(leftHalf);
  var rightSorted = mergeSort(rightHalf);

//Merge subarrays
  return merge(leftSorted, rightSorted);

};