function clampVolume(value) {
  return Math.max(0, Math.min(100, value));
}

console.assert(clampVolume(50) === 50);
console.assert(clampVolume(-10) === 0);
console.assert(clampVolume(120) === 100);
console.assert(clampVolume(0) === 0);
console.log('Volume rules passed');
