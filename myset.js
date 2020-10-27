class MySet {
  constructor (size) {
    this.counter = 0
    this.collection = new Array(size).fill(null)
  }

  add (inputData) {
    if (this.contains(inputData)) return
    if (this.counter === this.collection.length) {
      this.doubleCollectionSize()
    }
    this.collection[this.counter++] = inputData
  }

  doubleCollectionSize () {
    const tempCollection = new Array(this.counter * 2).fill(null)

    for (let i = 0; i < this.counter; ++i) {
      tempCollection[i] = this.collection[i]
    }
    this.collection = tempCollection
  }

  isEmpty () {
    return this.size() === 0
  }

  size () {
    return this.counter
  }

  remove (inputData) {
    if (this.counter === 0) return
    const tempCollection = new Array(this.counter).fill(null)
    let tempCollectionCount = 0
    for (let i = 0; i < this.counter; ++i) {
      if (this.collection[i] !== inputData) {
        tempCollection[tempCollectionCount] = this.collection[i]
        tempCollectionCount++
      }
    }
    this.counter--
    this.collection = tempCollection
  }

  contains (inputData) {
    for (let i = 0; i < this.counter; ++i) {
      if (this.collection[i] === null) return false
      if (this.collection[i] === inputData) {
        return true
      }
    }
    return false
  }
}
module.exports = MySet
