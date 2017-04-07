Explain to a five year old how the algorithm works (3-4 sentences max)
Psuedo code for each sorting implementation
In your own words, describe the performance of the alogirthm for the following cases:
Best case scenario
Worst case scenario

#Bubble-sort --

Bubble sort loops through a list and compares adjacent values, then swaps the highter value up to the top (the right side of the array)

Pseudocode
--

Is a function:
  function bubbleSort(list){
    var n = list.length
    for i loops through list (1 to n-1)
      compares adjacent elements
        if(list[i] > list[i+1]){
        swap list[i] with list[list+1]
        }
        swaps higher value toward the end of the list
    returns the sorted array
  }

