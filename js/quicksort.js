module.exports = function quicksort(arr) {
    var pivot = arr[0];
    var arrR = [];
    var arrL = [];

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

    // console.log(arr);
    // console.log(pivot);
    // console.log(arrR, 'R');
    // console.log(arrL, 'L');

    // var right = quicksort(arrR);
    // console.log(right, "right");

    // var left = quicksort(arrL);
    // console.log(left, "left");

    // var almost = left.concat(pivot, right);
    // console.log(almost);
    var newArr = quicksort(arrL).concat(pivot, quicksort(arrR));

    return  newArr;
};