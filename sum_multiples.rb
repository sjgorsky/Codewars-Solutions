def sum_mul(n, m)
  arr = []
  acc = 0
  original = n
  
  while n < m
    acc = n
    arr.push(acc)
    n = n + original
  end
  
  if arr.empty?
    return "INVALID"
  else
    return arr.reduce(&:+)
  end