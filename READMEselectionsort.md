Explain to a five year old how the algorithm works (3-4 sentences max)
Psuedo code for each sorting implementation
In your own words, describe the performance of the alogirthm for the following cases:
Best case scenario
Worst case scenario

#Selection-sort --

Selects the smallest element in an array and pushes is to a new array.

[ 1,6,8,2,5]---> [ ]
[ 1,6,8,2,5]---> [1]
[ 1,6,8,2,5]---> [1,2]
[ 1,6,8,2,5]---> [1,2,5]
[ 1,6,8,2,5]---> [1,2,5,6]
[ 1,6,8,2,5]---> [1,2,5,6,8]

return new array


Psuedocode
--

Loop though an array
  find the smallest element
  push that element into a new array
  return new array

