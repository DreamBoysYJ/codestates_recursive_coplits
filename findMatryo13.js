function findMatryoshka(matryoshka, size) {
  // TODO: 여기에 코드를 작성합니다.
  if (Object.keys(matryoshka).length === 0) {
    return false;
  }
  if (matryoshka.size === 10) {
    return true;
  }
  if (matryoshka.size === 9) {
    return true;
  }
}

const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: null,
  },
};

let output = findMatryoshka(matryoshka, 10);
console.log(output); // --> true

output = findMatryoshka(matryoshka, 8);
console.log(output); // --> false
