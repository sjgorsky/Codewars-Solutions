//Given an array of integers your solution should find the smallest integer.



class SmallestIntegerFinder {
  findSmallestInt(args) {
    let newArr = args.sort((a,b) => a-b)
    return newArr[0]
  }
}