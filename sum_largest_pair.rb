def largest_pair_sum(numbers)
  new_arr = numbers.sort.reverse
  new_arr[0..1].inject(:+)
end