import objects from '../../fixtures/objects';
import totalAmount from '../../../redux/selector/totalAmountObjects';
test('should return zero for empty array', () => {
    expect(totalAmount([])).toBe(0);
});
test('should return 400 for first object', () => {
    expect(totalAmount([objects[2]])).toBe(500);
});
test('should return 1200 for all objects', () => {
    expect(totalAmount(objects)).toBe(1200);
});