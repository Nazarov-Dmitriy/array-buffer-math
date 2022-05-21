import Magician from '../Magician';

describe('Проверака атаки на растояние и дурмана', () => {
  test('Проверка атаки', () => {
    const result = new Magician();
    expect(result.attack).toBe(90);
  });
  test('should sum', () => {
    const result = new Magician();
    result.stoned = true;
    expect(result.stoned).toBe(85);
  });
});
