export function findRepeatedValues(arr: string[], count: number): number[] {
  
  // Создать объект для отслеживания количества повторений строк
  const counts: Record<string, number> = {};

  // Пройти по массиву и подсчитать повторения каждой строки
  for (const element of arr) {
    counts[element] = (counts[element] || 0) + 1;
  }

  // Создать массив для хранения строк, которые повторяются count раз
  const result: number[] = [];

  // Проверить каждую строку и добавить ее в результат, если она повторяется count раз
  for (const element in counts) {
    if (counts[element] === count) {
      result.push(Number(element));
    }
  }

  return result;
}
