/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 160,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 55,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 120,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 15,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 30,
    description: "Ceiling Fan"
  }
];


//// first question////////////

function getUniqueProductCount(arr){
let obj = {}
for(let i=0; i<arr.length; i++){
if(obj[arr[i].productName]==undefined){
obj[arr[i].productName]= arr[i].quantity
}
else{
obj[arr[i].productName] += arr[i].quantity
}
}
return obj
}
console.log(getUniqueProductCount(listOfProducts))



// second question approach 1/////////


 function getUniqueProduct(arr){
let ans = []
for(let i=0; i<arr.length; i++){
let response = false 
for(let j=0; j<ans.length; j++){
if(arr[i].productName==ans[j].productName){
ans[j].quantity += arr[i].quantity
response=true
}
}
if(response==false){
ans.push(arr[i])
}
}
return ans
}
console.log(getUniqueProduct(listOfProducts))  



//  second question approach 2/////////////////


function getUniqueProduct1(arr){
let obj = new Map()
for(let i=0; i<arr.length; i++){
if(obj.has(arr[i].productName)){
let a = obj.get(arr[i].productName)
a.quantity += arr[i].quantity
obj.set(a.productName, a)
}
else{
obj.set(arr[i].productName, arr[i])
}
}
let res = []
for(key of obj){
res.push(key[1])
}
return res
}
console.log(getUniqueProduct1(listOfProducts))