function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    console.log(a,b,a-b);
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);