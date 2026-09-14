function validDuration(seconds) {
  return Number.isFinite(seconds) && seconds >= 0;
}

console.assert(validDuration(0));
console.assert(validDuration(180));
console.assert(!validDuration(-1));
console.assert(!validDuration(NaN));
console.log('Track duration rules passed');
