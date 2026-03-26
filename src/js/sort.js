function sortHeroesByHealth(heroes) {
  if (!Array.isArray(heroes)) {
    throw new Error('Argument must be an array');
  }

  return [...heroes].sort((a, b) => b.health - a.health);
}

export default sortHeroesByHealth;
