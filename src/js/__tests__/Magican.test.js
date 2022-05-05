import Magician from '../Magician';

describe('Проверака атаки на растояние и дурмана', () => {
  test('Проверка атаки', () => {
    expect((new Magician().boardАttack(2))).toBe(90);  });
  test('should sum', () => {
    expect((new Magician().stoned(2))).toBe(85);
  });
});
