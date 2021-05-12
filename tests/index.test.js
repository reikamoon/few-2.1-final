const rm = require('../src/index');

test('Phone Format', () => {
    expect(rm.phoneFormat('1234567890')).toBe('(123) 456-7890')
    expect(rm.phoneFormat('5551234567')).toBe('(555) 123-4567')
})

test('Phone Format Nulls', () => {
    expect(rm.phoneFormat("121424141243")).toBe(null);
    expect(rm.phoneFormat("isthisaphonenumber?")).toBe(null);
})
