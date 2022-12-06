function flattenArr(arr) {
  const result = [];
  console.log(result);
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flattend = flattenArr(arr[i]);
      result.push(...flattend);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = flattenArr([[2, [[3]]], 4, [[[5]]]]);
console.log(output); // --> [2, 3, 4, 5]
