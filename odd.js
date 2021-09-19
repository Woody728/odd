//My first attempt at this task. 

function solution(A) {
    let fr = [];
    for(i=0;i<A.length;i++){
        for(j=0;j<A.length;j++){
            if(A[i]===A[j] && i < j){
              fr.push(A[i]);
              /*After the number has been pushed to the fr array, I want to delete it from A. 
              However, one must be careful as this decreases the index of the next item 
              in the array by 1. Overall, we should iterate over the same index again. 
              So, if i=2, the next item will also have index i=2. Decreasing the i index 
              then letting it be automatically increased by the for loop achieves this. */
              A.splice(i, 1);
              /*If i<j, the index of A[j] will increase to A[j-1] after A[i] is removed. 
              If i>j, A[j] will not be affected.*/
              A.splice(j-1, 1)
              i--;
              //I'm hoping that 'break' will break out of the j-loop but stay in the i-loop
              break;
            }
            if(A[i]===A[j] && i>j){
              fr.push(A[i]);
              A.splice(i, 1);
              A.splice(j, 1)
              j=0;
              i--;
              break;
            }
        }
    }
    for(k=0;k<A.length;k++){
        if(fr.includes(A[k])===false){
          loner = A[k];
          //Note: It wouldn't let me write 'let loner = A[k]' above. Find out why. 
        }
    }
    return loner;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
console.log(solution([2,2,3,4,3,5,4]));
console.log(solution([2,4,8,3,4,2,1,8,3,8,8,7,7]))

//My second attempt at this task, in which I used maps.

function solution(A){
  let amap = new Map();
  for(i=0;i<A.length;i++){
      if(amap.has(A[i])){
        //amap.set(A[i], amap.get(A[i])+1);
        yu = amap.get(A[i]);
        amap.set(A[i], yu+1);
      } else {
          amap.set(A[i], 1);
      }
  }
  for(let [key, value] of amap.entries()){
      if(value % 2 !== 0){
        //It wouldn't let me use 'let val = key' here. Find out why.
        val = key;
      }
  }
  console.log(amap);
  return val;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
console.log(solution([2,2,3,4,3,5,4]));
console.log(solution([2,4,8,3,4,2,1,8,3,8,8,7,7]))
