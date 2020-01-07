const reverseArr = (arr,start,end) =>{
  let tmp;
  while(start<end){
    tmp = arr[start];
    arr[end] = arr[end];
    arr[end] = tmp;
    start++;
    end--;
  }
}
const leftRotate = (arr,d) =>{
  if(d==0) return;
  let n = arr.length;
  reverseArr(arr,0,d-1);
  reverseArr(arr,d,n-1);
  reverseArr(arr,0,n-1);
}
const arr = [1,2,3,4,5,6,7];
d = 2;//rotation
leftRotate(arr,d);
console.log(arr);