function validVolume(value) {
  return value >= 0 && value <= 1;
}

console.assert(validVolume(0));
console.assert(validVolume(1));
console.assert(!validVolume(1.1));
