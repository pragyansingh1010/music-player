function volume(value) {
  return Math.min(100, Math.max(0, value));
}

console.assert(volume(50) === 50);
console.assert(volume(-10) === 0);
console.assert(volume(150) === 100);
console.assert(volume(0) === 0);
console.log('Volume rules passed');
