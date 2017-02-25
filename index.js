function isBananaMan(guess) {
  if (guess.trim().toUpperCase() === 'ERIC') {
    return true;
  }
  return false;
}

module.exports = isBananaMan;
