// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a))
console.log(Array.isArray(b))


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i = 0; i < a.length; i++) {
  a[i] *= 2
}
console.log(a)

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(" "))
console.log(colors.join("+"))
console.log(colors.join(","))


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort((a, b) => {
  return b-a;
}))


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var arr = []
var arr2 = []
for(var i = 0; i < a.length; i++) {
  if(a.indexOf(a[i]) == i) {
    arr.push(a[i])
  }
}
arr.map(item => {
  var num = 0
  a.map(item2 => {
    if(item2 == item) {
      num = num + 1
    }
  })
  arr2.push(num)
})
var max;
arr2.map(item => {
  if(max) {
    max = max < item? item : max
  } else {
    max = item
  }
})
console.log(arr[arr2.indexOf(max)])