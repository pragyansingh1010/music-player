function validIndex(index, length) {
  return index >= 0 && index < length;
}

console.assert(validIndex(0, 3));
console.assert(validIndex(2, 3));
console.assert(!validIndex(3, 3));
