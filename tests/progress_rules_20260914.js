function progress(current, duration) {
  if (duration <= 0) return 0;
  return Math.min(100, Math.max(0, (current / duration) * 100));
}

console.assert(progress(0, 200) === 0);
console.assert(progress(100, 200) === 50);
console.assert(progress(300, 200) === 100);
console.log('Player progress rules passed');
