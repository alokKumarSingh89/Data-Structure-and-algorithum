const gcd = (a,b) =>{
  if(b===0){
    return a;
  }
  else return gcd(b,a%b);
}
const leftRotate = (arr,d) =>{
  const length = arr.length;
  d = d%length;
  const _gcd = gcd(d,length); 
  console.log(d,_gcd)
}
const arr = [1,2,3,4,5,6,7];
d = 2;//rotation
leftRotate(arr,d);
