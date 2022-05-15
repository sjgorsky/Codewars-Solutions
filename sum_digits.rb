def sum_digits(number)
  num_arr = number.to_s.split("").map(&:to_i)
  p num_arr.inject(0){|x, sum| x + sum}
end
