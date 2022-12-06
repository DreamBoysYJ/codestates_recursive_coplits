function unpackGiftbox(giftBox, wish) {
  // 배열 안의 배열 안의 배열
  // 처음엔 1차 요소 싹 훑고 2차 배열로 들어가서 싹 훑고 그런 줄 알았다
  // 그냥 요소 하나 하나 살피면서 만약 arr이면 이것만 다시 던져준다면?
  //  요소가 빈배열인경우 다음으로 넘길수도 있어야 하고 애초에 빈배열이면 false를 반환할수도 있어야 하고...

  // 배열 안에 배열이 있으면 여기 안에 들어가 밖으로 못 나오고 끝내버린다. 어떡하지?
  if (giftBox.length === 0 || wish.length === 0) {
    return false;
  }
  const head = giftBox[0];
  const tail = giftBox.slice(1);

  if (Array.isArray(head)) {
    return unpackGiftbox(head.concat(tail), wish);
  }

  if (head === wish) {
    return true;
  }
  return unpackGiftbox(tail, wish);
}

const giftBox = ["macbook", "mugcup", ["eyephone", "postcard"], "money"];

let output = unpackGiftbox(giftBox, "iphone");
console.log(output); // --> false

output = unpackGiftbox(giftBox, "postcard");
console.log(output); // --> true

output = unpackGiftbox(
  ["macbook", "mugcup", ["eyephone", [], ["postcard"]], "money"],
  "postcard"
);
console.log(output); // --> true
