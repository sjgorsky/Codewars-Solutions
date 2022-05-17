def square_or_square_root(arr)
  new_arr = []
  arr.each { |x|
    if Math.sqrt(x) % 1 == 0
      new_arr.push(Integer.sqrt(x))
    else
      new_arr.push(x ** 2)
    end
  }
  return new_arr
end