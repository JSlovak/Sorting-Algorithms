module.exports = function(arr) {

  function bubblesort(arr){
    var sorted = false;
    var temp = null;

    for (var i= 0; i < arr.length ; i++){
      sorted = true;

      if (arr[i] > arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        sorted = false;
      }
    }
    if (sorted === true){
    return arr;
    }
  }
};
