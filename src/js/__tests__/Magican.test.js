import Magician from '../Magician';

describe('Проверака атаки на растояние и дурмана', () => {
  test('Проверка атаки', () => {
    const result = new Magician();
    result.attackDistance = 2;
    expect(result.attackDistance).toBe(90);
  });
  test('should sum', () => {
    const result = new Magician();
    result.stoned = 2;
    expect(result.stoned).toBe(85);
  });
});
