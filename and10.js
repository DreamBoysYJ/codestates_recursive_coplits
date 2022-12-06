function and(arr) {
  if (arr.length === 0) {
    return true;
  }

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);

  // if (head === false) {
  //   return false;
  // }

  return head && and(tail);
}

let output = and([true, true, true]);
console.log(output); // --> true

output = and([true, true, false]);
console.log(output); // --> false
