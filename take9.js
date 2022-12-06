function take(num, arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 앞부터 num개만 살려야 한다.
  // 앞을 남겨야 하나 뒤를 쳐내야 하나
  // 앞을 남기려면 바깥에 변수를 두고 하나씩 집어 넣어야 하는데 안될듯
  // 뒤를 쳐내야 하는데, num개 만큼 쳐내는게 아니다
  // 5, [1,2,3,4,5,6] 이면 1개만 쳐내야돼, 그럼 length - 5 만큼만 쳐내면 되나?
  // 둘이 같으면 바로 끝내
  // num > arr 이어도 바로 끝내
  // num < arr 이면 arr 하나 떼고, 그대로 다시 보내

  if (arr.length === 0) {
    return [];
  }
  if (num >= arr.length) {
    return arr;
  }
  const newArr = arr.slice(0, -1);
  return take(num, newArr);
}

// 앞에서 부터 하나씩 붙이기. concat
/* function take(num, arr) {
  // if (num >= arr.length) {
  //   return arr;
  // }

  if (num === 0 || arr.length === 0) {
    return [];
  }

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);
  
  >>HEAD만 남기고 나머지 다시 돌려서 하나씩 헤드를 붙여
  return [head].concat(take(num - 1, tail));
} */

console.log(take(4, [-1, -2, 1, 2, 3, 1, 2, 3, 4]));
