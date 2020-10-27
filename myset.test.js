const MySet = require('./myset')
let count = 0

describe('Set data Structure', () => {
  let set = new MySet()
  beforeEach(() => {
    set = new MySet()
  })
  test('Empty set', () => {
    expect(set.isEmpty()).toBeTruthy()
    set.add(1)
    expect(set.isEmpty()).toBeFalsy()
  })
  test('add elements and double size', () => {
    set.add(1)
    expect(set.size()).toBe(1)
    set.add(2)
    set.add(3)
    expect(set.size()).toBe(3)
    set.add(4)
    set.add(5)
    expect(set.size()).toBe(5)
    set.remove(5)
    expect(set.size()).toBe(4)
  })

  test('Set Size', () => {
    expect(set.size()).toBe(0)
    set.add(1)
    expect(set.size()).toBe(1)
  })

  test('Set Contain elements', () => {
    expect(set.contains(1)).toBeFalsy()
    set.add(1)
    expect(set.contains(1)).toBeTruthy()
    expect(set.size()).toBe(1)
    set.add(1)
    expect(set.size()).toBe(1)
  })

  test('Set remove Elements', () => {
    set.add(1)
    expect(set.contains(1)).toBeTruthy()
    set.remove(1)
    expect(set.contains(1)).toBeFalsy()
    expect(set.size()).toBe(0)
  })
})
