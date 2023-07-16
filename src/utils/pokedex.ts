const MAX_NATIONAL_NUMBER = 1010;

export const getRandomPokemon: (notThisOne?: number) => number = (notThisOne?: number) => {
  const nationalNumber = Math.floor(Math.random() * MAX_NATIONAL_NUMBER) + 1;

  if (nationalNumber !== notThisOne) return nationalNumber;

  return getRandomPokemon(notThisOne);
};

export const getOptionsForVote = () => {
  const firstNationalNumber = getRandomPokemon();
  const secondNationalNumber = getRandomPokemon(firstNationalNumber);

  return [firstNationalNumber, secondNationalNumber];
};
