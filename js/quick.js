module.exports = function quicksort(arr) {
    var pivot = arr[0];
    var arrR = [];
    var arrL = [];

    // Base case
    if(arr.length <= 1){
      return arr;
    }

    for(var i=1; i < arr.length; i++){
      if(pivot <= arr[i]){
        arrR.push(arr[i]);
      }

      if(pivot > arr[i]){
        arrL.push(arr[i]);
      }
    }

    var newArr = quicksort(arrL).concat(pivot, quicksort(arrR));

    return  newArr;
};