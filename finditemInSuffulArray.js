
const search = (arr,l,h,key) => {
  console.log(l,h)
  if(l>h){
    return -1;
  }

  let mid = (l+h)/2;
  if(arr[mid] == key){
    return key;
  }
  // ifarr[l..mid] is sorted
  if(arr[l]<=arr[mid]){
    if(key>=arr[l] and key <= arr[mid] ){
      return search(arr,l,mid-1,key);
    }
    return search(arr,mid+1,h,key);
  }
  // if not sorted
  if(key >= arr[mid] and key<=arr[h]){
    return search(arr,mid+1,h,key);
  }

  return search(arr,l,mid-1,key);
}

let arr = [4, 5, 6, 7, 8, 9, 1, 2, 3]
let key =6;
let i = search(arr,0,arr.length-1,key);

if(i == -1){
  console.log(`Index: ${i}`)
}else{
  console.log("Key not found")
}