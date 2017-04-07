Explain to a five year old how the algorithm works (3-4 sentences max)
Psuedo code for each sorting implementation
In your own words, describe the performance of the alogirthm for the following cases:
Best case scenario
Worst case scenario

#Merge-sort --

Think recursion. Divide and Conquer.

Take a problem, divide it into smaller sub-problems.
Do the work on each sub-problem.
Then combine the solutions.

Pseudo Code
--

function mergeSort(list){
    baseCase: if (list.length < 2){
      return
    }

    Break list into halves L and R
    var Lsorted = mergeSort(L);
    var Rsorted = mergeSort(R);
    return merge(Lsorted, Rsorted);

   function merge (L, R) {
    var Lpoint(er) = 0;
    var Rpoint(er) = 0;
    var outputArr = [];

    Loop until Lpoint === L.length and Rpoint === R.length {
      if (Lpoint is greater than Rpoint){
        push Rpoint to outputArr
        increment Rpoint
      }

      else
        push Lpoint into outputArr
        increment Lpoint

      return outputArr
    }
  }
}