function next(index, length) {
  return length ? (index + 1) % length : 0;
}

console.assert(next(0, 1) === 0);
console.assert(next(1, 2) === 0);
console.assert(next(2, 5) === 3);
console.log('Track index wrapping passed');
