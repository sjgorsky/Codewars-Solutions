def count_positives_sum_negatives(lst)
  arr = []
  if !lst.empty? && !lst.nil?
    pos_count = 0
    neg_sum = 0
    lst.each do |x|
      if x > 0
        pos_count += 1
      else neg_sum += x
      end
    end
      arr.push(pos_count)
      arr.push(neg_sum)
  else
  p arr
  end
end
