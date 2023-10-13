import { taskFirst, taskNext } from './0-constants.js';

// Prueba para la función taskFirst
test('taskFirst returns the expected string', () => {
  const result = taskFirst();
  expect(result).toEqual("I prefer const when I can.");
});

// Prueba para la función taskNext
test('taskNext returns the expected string', () => {
  const result = taskNext();
  expect(result).toEqual("But sometimes let is okay");
});