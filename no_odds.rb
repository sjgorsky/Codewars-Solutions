def no_odds( values )
  # Return only non-odd values
  values.select{|a| a.even? }
end