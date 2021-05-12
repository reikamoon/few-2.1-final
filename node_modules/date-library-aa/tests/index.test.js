const D = require('../src/index')
const { months, mons, days, dys } = require('../src/utils')

const today = new Date()
const d = new D(today)
const bDay = new D(2001, 0, 12)

test('D.year', () => {
    expect( d.year ).toBe( today.getFullYear() )
    expect( bDay.year ).toBe(2001)
})

test('D.month', () => {
    expect(d.month).toBe(months[3])
})

test('D.mon', () => {
    expect(bDay.mon).toBe(mons[0])
})

test('D.day', () => {
    expect(d.day).toBe(days[today.getDay()])
})

test('D.dy', () => {
    expect(d.dy).toBe(dys[today.getDay()])
})

test('D.date', () => {
    expect(d.date).toBe(today.getDate())
})

test('D.hour', () => {
    expect(d.hour).toBe(today.getHours())
})

test('D.min', () => {
    expect(d.min).toBe(today.getMinutes())
})

test('D.sec', () => {
    expect(d.sec).toBe(today.getSeconds())
})

test('format', () => {
    expect(d.format(""))
})

test('when', () => {
    expect(d.when(""))
})
