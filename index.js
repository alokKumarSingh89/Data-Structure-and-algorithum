const gcd = (a,b) =>{
  if(b===0){
    return a;
  }
  else return gcd(b,a%b);
}
const leftRotate = (arr,d) =>{
  const n = arr.length;
  d = d%n;
  const _gcd = gcd(d,n); 
  for(let i=0;i<_gcd;i++){
    let temp = arr[i];
    let j = i;
    labe2:while(true){
      let k = j+d;
      
      if(k>=n){
        k = k-n;
      }
      if(k==i){
        break labe2;
      }
      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  }
}
const arr = [1,2,3,4,5,6,7];
d = 2;//rotation
leftRotate(arr,d);
console.log(arr);
