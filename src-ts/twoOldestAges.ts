export function twoOldestAges(ages: number[]): number[] {
  const getMaxNumber = (arrayOfNumber: number[]): number =>
    Math.max(...arrayOfNumber);

  const firstMaxNumber = getMaxNumber(ages);

  const getArrayWithoutMaxNumber = () =>
    ages.filter(age => age !== firstMaxNumber);
  const arrayWithoutMaxNumber = getArrayWithoutMaxNumber();

  const secondMaxNumber = getMaxNumber(arrayWithoutMaxNumber);

  return [firstMaxNumber, secondMaxNumber];
}
