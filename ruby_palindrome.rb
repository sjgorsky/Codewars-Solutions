def is_palindrome(str)
  if str.to_s == str.to_s.reverse
    true
  else
    false
  end
end
