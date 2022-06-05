def find(n)
  counter = 1
  arr = []
  while counter <= n
    arr << counter
    counter = counter + 1
  end
  new_arr = arr.select {|x| x%3==0 || x%5==0}
  new_arr.inject(:+)
end