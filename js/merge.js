module.exports = function mergeSort(arr) {
// Base case.
  if(arr.length <= 1){
    return arr;
  }

// Divide and conquer !!
  function merge( R, L){
    var pointR = 0;
    var pointL = 0;
    var outputArr = [];

    if (L[0] > R[0]){
      outputArr.push(pointR[0]);
      pointR++;
    } else
      { outputArr.push(pointL[0]);
        pointL++;
      }
    return outputArr;
  }
  // Divides the array in two
  var leftHalf = arr.slice(0, arr.length/2);
  var rightHalf = arr.slice(0,arr.length/2);

  // Recurses on on each half of the array
  var leftSorted = mergeSort(leftHalf);
  var rightSorted = mergeSort(rightHalf);

  //Merges subarrays
  return merge(leftSorted, rightSorted);

};